import {
    Component,
    Input,
    OnInit,
    SimpleChanges
} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {
    Router,
    ActivatedRoute
} from '@angular/router';

import { Customer } from 'src/shared/modals/customer';
import { AppConstants } from 'src/shared/modals/app-constants';

import { ToastService, CustomerService, GenratePDFService } from 'src/shared';

@Component({
    templateUrl: 'shared-customer.component.html',
    selector: 'shared-customer'
})
export class SharedCustomerComponent implements OnInit {
    @Input() CustomerGroup: FormGroup;
    @Input() CustomerData: FormGroup;
    @Input() isView: Boolean;
    @Input() isLoader: boolean;

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
        private customerService: CustomerService,
        private router: Router,
        private genrateService: GenratePDFService,
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
        if (this.isView) {
            this.getAll();
            this.valueChanges();
        } else {
            this.contactPeopleDtls.clear();
            this.nomineeDtls.clear();

            this.addContactPeople();
            this.addNomineeDtls();
        }
    }

    getAll() {
        this.customerService.getCustomerAllDetail().then((data: any) => {
            this.allCustomerList = data.response;
        });
    }

    valueChanges() {
        this.CustomerGroup.get('custId').valueChanges.subscribe((custId: any) => {
            if (!custId || custId == "") {
                this.toster.error("Please Select Customer")
            }
            this.isLoader = true;
            this.customerService.getCustomerDetail(custId).then((data: any) => {
                this.custInfo = data.response;
                this.CustomerGroup.patchValue(this.custInfo, { emitEvent: false });
                this.initContactPeople(this.custInfo.contactPeopleDtls);
                this.initNomineeDtls(this.custInfo.nomineeDtls);

                this.CustomerGroup.disable({ emitEvent: false });
                this.CustomerGroup.get('custId').enable({ emitEvent: false });

                this.fileUrl = AppConstants.API_ENDPOINT + "/customer/download/" + custId;
                this.isLoader = false;
            }, error => {
                this.isLoader = false;
            });
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
    }

    get contactPeopleDtls() {
        return this.CustomerGroup.get('contactPeopleDtls') as FormArray;
    }

    get nomineeDtls() {
        return this.CustomerGroup.get('nomineeDtls') as FormArray;
    }

    initContactPeople(data) {
        console.log(data);

        this.contactPeopleDtls.clear();
        if (data?.length) {
            data.forEach(e => {
                this.contactPeopleDtls.push(this.contactDetails(e));
            });
        }
    }

    initNomineeDtls(data) {
        console.log(data);

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

    deleteNominee(item, i) {
        this.nomineeDtls.removeAt(i);
    }

    deleteContact(item, i) {
        this.contactPeopleDtls.removeAt(i);
    }

    addNomineeDtls() {
        if (this.nomineeDtls.invalid) {
            return;
        }
        this.nomineeDtls.push(this.nomineeDetails(null));
    }

    contactDetails(data) {
        let Group = this.fb.group({
            contactPersionId: [data?.contactPersionId ?? null],
            fullName: [data?.fullName ?? null],
            address: this.fb.group({
                address: [data?.address?.address ?? null],
                phoneNo: [data?.address?.phoneNo ?? null]
            })
        });

        return Group;
    }

    nomineeDetails(data) {
        let Group = this.fb.group({
            nomineeId: [data?.nomineeId ?? null],
            fullName: [data?.fullName ?? null],
            relation: [data?.relation ?? null],
            address: this.fb.group({
                address: [data?.address?.address ?? null],
                phoneNo: [data?.address?.phoneNo ?? null]
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

    /* ##################### View section ###################### */

    editCustContact(custContactDtls: any) {
        this.customerService.editCustContactPersionDetail(custContactDtls).then(data => {
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

    print() {
        let group = this.CustomerGroup.getRawValue();

        this.genrateService.generatePDFwithoutHtml(group, this.customer?.view);
        // window.print();
    }

    editCustInfo() {
        this.isLoader = true;
        this.custInfo.address = this.addressDetail;
        this.customerService.editCustomerDetail(this.custInfo).then((data: any) => {
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
            this.isLoader = false;
        }, errot => {
            this.isLoader = false;
        });
    }
}
