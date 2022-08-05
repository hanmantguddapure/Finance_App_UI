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
                url: '/application/loan/account'
            },
            {
                name: 'Disbursement',
                url: '/application/loan/disbursement'
            },
            {
                name: 'Installments',
                url: '/application/loan/emi'
            },
            {
                name: 'Reports',
                url: '/application/loan/reports'
            },
            {
                name: 'Penlty',
                url: '/application/loan/penalty'
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
                name: 'Loan',
                url: '/application/firm/loan',
            },
            {
                name: 'Short Term Loan',
                url: '/application/firm/short-term',
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
