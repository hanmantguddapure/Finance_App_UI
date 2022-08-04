export const navItems: any = [
    {
        name: 'Dashboard',
        url: '/application/dashboard',
        icon: 'fa fa-dashboard',
    },
    {
        name: 'Customer',
        url: '/application/customer',
        icon: 'fa fa-user',
    },
    {
        name: 'Loan',
        url: '',
        icon: 'fa fa-money',
        children: [
            {
                name: 'Account',
                url: '/application/loan-account',
                icon: 'cil-notes'
            },
            {
                name: 'Disbursement',
                url: '/application/disbursed-loans',
                icon: 'cil-notes'
            },
            {
                name: 'Installments',
                url: '/application/loan-emi',
                icon: 'cil-pencil',
            },
            {
                name: 'Reports',
                url: '/application/loan-repo',
                icon: 'cil-notes',
            },
            {
                name: 'Penlty',
                url: '/application/loan-penlty',
                icon: 'cil-pencil',
            }
        ]
    },
    {
        name: 'Expense',
        url: '/application/expense',
        icon: 'fa fa-exchange',
    },
    {
        name: 'Firm',
        url: '',
        icon: 'fa fa-building',
        children: [
            {
                name: 'New Loan',
                url: '/application/firm-loan',
                icon: 'cil-pencil',
            },
            {
                name: 'Close Loan',
                url: '/application/firm-loan-close',
                icon: 'cil-pencil',
            },
            {
                name: 'Report',
                url: '/application/firm-loan-repo',
                icon: 'cil-pencil',
            },
            {
                name: 'New Short Term Loan',
                url: '/application/short-term-loan',
                icon: 'cil-pencil',
            },
            {
                name: 'Close Short Term Loan',
                url: '/application/short-term-loan-close',
                icon: 'cil-pencil',
            },
            {
                name: 'Report Short Term Loan',
                url: '/application/short-term-loan-Report',
                icon: 'cil-pencil',
            },
        ]
    },
    {
        name: 'Fixed Deposite',
        url: '',
        icon: 'fa fa-file-o',
        children: [
            {
                name: 'Account',
                url: '/application/fd/account',
            },
            {
                name: 'Interest',
                url: '/application/fd/interest',
            },
            {
                name: 'Reports',
                url: '/application/fd/reports',
            }
        ],
    }
];
