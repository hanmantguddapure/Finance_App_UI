import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router,
    ActivatedRoute
} from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastService, CustomerService, GenratePDFService } from 'src/shared';

@Component({
    templateUrl: 'customer-new.component.html'
})
export class CustomerNewComponent implements OnInit {

    CustomerGroup: FormGroup;
    isLoader: boolean;

    constructor(private toster: ToastService,
        private customerService: CustomerService,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.CustomerGroup = this.fb.group({
            custId: [null],
            fullName: [null, [Validators.required]],
            shortName: [null],
            profession: [null],
            adharNo: [null],
            panNo: [null],
            // professionName: [null],
            address: this.fb.group({
                address: [''],
                zipCode: [''],
                email: [''],
                phoneNo: [''],
                nativePlace: [''],
                altNo: ['']
            }),
            contactPeopleDtls: this.fb.array([]),
            nomineeDtls: this.fb.array([])
        });
    }

    ngOnInit() {
    }

    saveCustomerPersionDetail() {
        if (this.CustomerGroup.invalid) {
            this.toster.error("Please fill required fields");
            return;
        }
        this.isLoader = true;
        let customer = this.CustomerGroup.getRawValue();
        let contactdtls, nomineeDtls;
        customer.contactPeopleDtls.forEach((e: any) => {
            contactdtls = (e.fullName || e.address.address || e.address.phoneNo) ? 1 : 0;
        });
        customer.nomineeDtls.forEach((e: any) => {
            nomineeDtls = (e.fullName || e.address.address || e.address.phoneNo || e.relation) ? 1 : 0;
        });

        !contactdtls && delete customer.contactPeopleDtls;
        !nomineeDtls && delete customer.nomineeDtls;

        this.customerService.saveCustomerDetail(customer).then((data: any) => {
            this.CustomerGroup.get('custId').patchValue(data.custId);
            this.toster.success("New Customer Created Successfully")
            this.isLoader = false;
        }, error => {
            this.isLoader = false;
        })
    };
}
