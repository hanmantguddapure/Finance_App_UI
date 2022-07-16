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
            custId: [null],
            fullName: [null, [Validators.required]],
            shortName: [null],
            buiseness: [null],
            adharNo: [null],
            panNo: [null],
            professionName: [null],
            address: this.fb.group({
                address: [null],
                city: [null],
                district: [null],
                state: [null],
                country: [null],
                zipCode: [null],
                email: [null],
                phoneNo: [null],
                nativePlace: [null],
                altNo: [null],
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
