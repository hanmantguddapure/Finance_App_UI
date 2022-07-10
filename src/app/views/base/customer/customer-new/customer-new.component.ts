import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router,
    ActivatedRoute
} from '@angular/router';

import { Customer } from 'src/shared/modals/customer';
import { ToastService } from 'src/shared/services/toast.service';

import { CustomerserviceService } from 'src/app/services/customerservice.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: 'customer-new.component.html'
})
export class CustomerNewComponent implements OnInit {

    CustomerGroup: FormGroup;

    constructor(private toster: ToastService,
        private customerService: CustomerserviceService,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.CustomerGroup = this.fb.group({
            custId: [''],
            fullName: ['', [Validators.required]],
            shortName: [''],
            buiseness: [''],
            adharNo: [''],
            panNo: [''],
            professionName: [''],
            address: this.fb.group({
                address: [''],
                city: [''],
                district: [''],
                state: [''],
                country: [''],
                zipCode: [''],
                email: [''],
                phoneNo: [''],
                nativePlace: [''],
                altNo: [''],
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
        let customer = this.CustomerGroup.getRawValue();

        this.customerService.saveCustomerDetail(customer).subscribe(data => {
            this.CustomerGroup.get('custId').patchValue(data.custId);
            this.toster.success("New Customer Created Successfully")
        })
    };
}
