import { INavData } from "@coreui/angular";

export const navItems: INavData[] = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        iconComponent: { name: 'cil-library' }
    },
    {
        name: 'Customer',
        url: '/base/customer',
        iconComponent: { name: 'cil-user' }
    },
    {
        name: 'Loan',
        url: '/Loan',
        iconComponent: { name: 'cil-dollar' },
        children: [
            {
                name: 'Account',
                url: '/Loan',
                iconComponent: { name: 'cil-notes' },
                children: [
                    {
                        name: 'New',
                        url: '/base/loan-account',
                        iconComponent: { name: 'cil-pencil' }
                    },
                    {
                        name: 'View',
                        url: '/base/loan-detail',
                        iconComponent: { name: 'cil-pencil' }
                    },
                    {
                        name: 'Close',
                        url: '/base/close-loan',
                        iconComponent: { name: 'cil-pencil' }
                    },
                ]
            },
            {
                name: 'Disbursement',
                url: '/Loan',
                iconComponent: { name: 'cil-notes' },
                children: [
                    {
                        name: 'Disburse Loan',
                        url: '/base/loan-payment',
                        iconComponent: { name: 'cil-pencil' }
                    },
                    {
                        name: 'Disbursed Loans',
                        url: '/base/disbursed-loans',
                        iconComponent: { name: 'cil-pencil' }
                    },
                ]
            },
            {
                name: 'Installments',
                url: '/base/loan-emi',
                iconComponent: { name: 'cil-pencil' }
            },
            {
                name: 'Reports',
                url: '/base',
                iconComponent: { name: 'cil-notes' },
                children: [
                    {
                        name: 'Loan Status',
                        url: '/base/loan-repo',
                        iconComponent: { name: 'cil-pencil' }
                    },
                    {
                        name: 'Loan Holders',
                        url: '/base/loan-holders',
                        iconComponent: { name: 'cil-pencil' }
                    },
                    {
                        name: 'Loan Penalty',
                        url: '/base/loan-penlty-repo',
                        iconComponent: { name: 'cil-pencil' }
                    },
                    {
                        name: 'Collection Report',
                        url: '/base/loan-collection-report',
                        iconComponent: { name: 'cil-pencil' }
                    },
                ]
            },
            {
                name: 'Penlty',
                url: '/base/loan-penlty',
                iconComponent: { name: 'cil-pencil' }
            },
        ]
    },
    {
        name: 'Expense',
        url: '/base/expense',
        iconComponent: { name: 'cil-money' },
    },
    {
        name: 'Firm',
        url: '/Expense',
        iconComponent: { name: 'cil-building' },
        children: [
            {
                name: 'New Loan',
                url: '/base/firm-loan',
                iconComponent: { name: 'cil-pencil' }
            },
            {
                name: 'Close Loan',
                url: '/base/firm-loan-close',
                iconComponent: { name: 'cil-pencil' }
            },
            {
                name: 'Report',
                url: '/base/firm-loan-repo',
                iconComponent: { name: 'cil-pencil' }
            },
            {
                name: 'New Short Term Loan',
                url: '/base/short-term-loan',
                iconComponent: { name: 'cil-pencil' }
            },
            {
                name: 'Close Short Term Loan',
                url: '/base/short-term-loan-close',
                iconComponent: { name: 'cil-pencil' }
            },
            {
                name: 'Report Short Term Loan',
                url: '/base/short-term-loan-Report',
                iconComponent: { name: 'cil-pencil' }
            },
        ]
    },
    {
        name: 'Fixed Deposite',
        url: '/FD',
        iconComponent: { name: 'cil-bank' },
        children: [
            {
                name: 'Account',
                url: '/base/fdaccount',
                iconComponent: { name: 'cil-notes' },
                children: [
                    {
                        name: 'New',
                        url: '/base/fdaccount',
                        iconComponent: { name: 'cil-pencil' }
                    },
                    {
                        name: 'View',
                        url: '/base/fdaccountview',
                        iconComponent: { name: 'cil-pencil' }
                    },
                    {
                        name: 'Close',
                        url: '/base/fdaccountclose',
                        iconComponent: { name: 'cil-pencil' }
                    },
                ],
            },
            {
                name: 'Interest',
                url: '/base/fdaccount',
                iconComponent: { name: 'cil-notes' },
                children: [
                    {
                        name: 'Pay',
                        url: '/base/fdpayinterest',
                        iconComponent: { name: 'cil-pencil' }
                    },
                ],
            },
            {
                name: 'Reports',
                url: '/base/fdaccount',
                iconComponent: { name: 'cil-notes' },
                children: [
                    {
                        name: 'Status',
                        url: '/base/fdaccountreport',
                        iconComponent: { name: 'cil-pencil' }
                    },
                    {
                        name: 'Holders',
                        url: '/base/fdcustreport',
                        iconComponent: { name: 'cil-pencil' }
                    },
                ],
            },
        ],
    },
    {
        divider: true
    },



];
