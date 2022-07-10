import {
    Component,
    Input,
    OnInit,
    SimpleChanges
} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
    Router,
    ActivatedRoute
} from '@angular/router';



import { Customer } from '../../modals/customer';
import { ToastService } from '../../services/toast.service';

import { CustomerserviceService } from '../../../app/services/customerservice.service';
import { AppConstants } from 'src/shared/modals/app-constants';

@Component({
    templateUrl: 'shared-customer.component.html',
    selector: 'shared-customer'
})
export class SharedCustomerComponent implements OnInit {

    @Input() CustomerGroup: FormGroup;
    @Input() CustomerData: FormGroup;
    @Input() isView: Boolean;

    customer: Customer = new Customer(null);
    isCollapsed: boolean = false;
    isWitnessValid: boolean = false;
    iconCollapse: string = 'icon-arrow-up';
    custId: any;
    conatactPersionList: Array<Customer> = [];

    relation: any[];
    allCustomerList: any;
    custInfo: Customer;
    addressDetail: any;
    fileUrl: string;
    editCache: any;
    isEnableAdd: boolean;
    editProfession: boolean;
    isEiditable: boolean;
    editAdhar: boolean;
    editPan: boolean;
    editPostalCode: boolean;
    editAddress: boolean;
    editEmail: boolean;
    editPhone: boolean;

    constructor(private toster: ToastService,
        private customerService: CustomerserviceService,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder) {
        this.relation = [
            "Father",
            "Son",
            "Daughter",
            "Partner",
            "Husband",
            "Wife"
        ];
    }


    ngOnInit() {
        this.customerService.getCustomerAllDetail().subscribe((data: any) => {
            this.allCustomerList = data;
        });

        this.valueChanges();
    }

    valueChanges() {
        this.CustomerGroup.get('custId').valueChanges.subscribe((custId: any) => {
            if (custId == "") {
                this.toster.error("Please Select Customer")
            } else {
                this.customerService.getCustomerDetail(custId).subscribe(data => {
                    this.custInfo = data;
                    this.CustomerGroup.patchValue(this.custInfo, { emitEvent: false });
                    this.initContactPeople(this.custInfo.contactPeopleDtls);
                    this.initNomineeDtls(this.custInfo.nomineeDtls);

                    this.CustomerGroup.disable({ emitEvent: false });
                    this.CustomerGroup.get('custId').enable({ emitEvent: false });

                    this.fileUrl = AppConstants.API_ENDPOINT + "/customer/download/" + custId;
                });
                this.customerService.getCustomerContactPeoples(custId).subscribe(data => {
                    this.conatactPersionList = data;
                });
            }
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(this.CustomerGroup);
        if (!this.isView) {
            this.addContactPeople();
            this.addNomineeDtls();
        }
    }

    get contactPeopleDtls() {
        return this.CustomerGroup.get('contactPeopleDtls') as FormArray;
    }

    get nomineeDtls() {
        return this.CustomerGroup.get('nomineeDtls') as FormArray;
    }

    initContactPeople(data) {
        this.contactPeopleDtls.clear();
        if (data?.length) {
            data.forEach(e => {
                this.contactPeopleDtls.push(this.contactDetails(e));
            });
        }
    }

    initNomineeDtls(data) {
        this.nomineeDtls.clear();
        if (data?.length) {
            data.forEach(e => {
                this.nomineeDtls.push(this.nomineeDetails(e));
            });
        }
    }

    addContactPeople() {
        if (this.contactPeopleDtls.invalid) {
            return;
        }
        this.contactPeopleDtls.push(this.contactDetails(null));
    }

    addNomineeDtls() {
        if (this.nomineeDtls.invalid) {
            return;
        }
        this.nomineeDtls.push(this.nomineeDetails(null));
    }

    contactDetails(data) {
        let Group = this.fb.group({
            contactPersionId: [data?.contactPersionId ?? ''],
            fullName: [data?.fullName ?? '', [Validators.required]],
            address: this.fb.group({
                address: [data?.address?.address ?? ''],
                city: [data?.address?.city ?? ''],
                district: [data?.address?.district ?? ''],
                state: [data?.address?.state ?? ''],
                country: [data?.address?.country ?? ''],
                zipCode: [data?.address?.zipCode ?? ''],
                email: [data?.address?.email ?? ''],
                phoneNo: [data?.address?.phoneNo ?? ''],
                nativePlace: [data?.address?.nativePlace ?? ''],
                altNo: [data?.address?.altNo ?? ''],
            })
        });

        return Group;
    }

    nomineeDetails(data) {
        let Group = this.fb.group({
            nomineeId: [data?.nomineeId ?? ''],
            fullName: [data?.fullName ?? '', [Validators.required]],
            relation: [data?.relation ?? ''],
            address: this.fb.group({
                address: [data?.address?.address ?? ''],
                city: [data?.address?.city ?? ''],
                district: [data?.address?.district ?? ''],
                state: [data?.address?.state ?? ''],
                country: [data?.address?.country ?? ''],
                zipCode: [data?.address?.zipCode ?? ''],
                email: [data?.address?.email ?? ''],
                phoneNo: [data?.address?.phoneNo ?? ''],
                nativePlace: [data?.address?.nativePlace ?? ''],
                altNo: [data?.address?.altNo ?? ''],
            })
        });

        return Group;
    }

    collapsed(event: any): void {
        // console.log(event);
    }

    expanded(event: any): void {
        // console.log(event);
    }

    toggleCollapse(): void {
        this.isCollapsed = !this.isCollapsed;
        this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
    }

    saveCustomerPersionDetail() {
        if (this.CustomerGroup.invalid) {
            this.toster.error("Please fill required fields");
            return;
        }
        let customer = this.CustomerGroup.getRawValue();

        this.customerService.saveCustomerDetail(customer).subscribe(data => {
            this.customer = data;
            this.custId = this.customer.custId;
            this.toster.success("New Customer Created Successfully")
        })
    };

    /* ##################### View section ###################### */

    editCustContact(custContactDtls: any) {
        this.customerService.editCustContactPersionDetail(custContactDtls).subscribe(data => {
            this.toster.success("Save Changes Successfully");
            this.editCache[custContactDtls.contactPersionId] = false;
        });
    }

    enableAdd() {
        this.isEnableAdd = true;
    }

    allowEdit(group: AbstractControl): void {
        group.enable();
    }

    saveCustContactPersionDetail(custContactPersion: any): void {
        custContactPersion.custId = this.custInfo.custId;
        this.customerService.saveCustContactPersionDetail(custContactPersion).subscribe(data => {
            this.conatactPersionList.push(custContactPersion);
            this.isEnableAdd = false;
            this.toster.success("Added Successfully")
        })
    };

    editCustInfo() {
        this.custInfo.address = this.addressDetail;
        this.customerService.editCustomerDetail(this.custInfo).subscribe(data => {
            this.custInfo = data;
            this.editProfession = true;
            this.isEiditable = false;
            this.editAdhar = true;
            this.editPan = true;
            this.editPostalCode = true;
            this.editAddress = true;
            this.editEmail = true;
            this.editPhone = true;
            this.toster.success("Save Changes Successfull");
        })
    }
}
