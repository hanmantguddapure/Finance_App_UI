interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'Open'
    }
  },
 
 
  {
    name: 'Customer',
    url: '/customer',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'New',
        url: '/base/customer',
        icon: 'icon-puzzle'
      },
      {
        name: 'View',
        url: '/base/customer-info',
        icon: 'icon-puzzle'
      },
     
    ]
  },

  
  {
    name: 'Loan',
    url: '/Loan',
    icon: 'icon-puzzle',
    children: [
     {
        name: 'Account',
        url: '/Loan',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'New',
            url: '/base/loan-account',
            icon: 'icon-puzzle'
          },
          {
            name: 'View',
            url: '/base/loan-detail',
            icon: 'icon-puzzle'
          },
          {
            name: 'Close',
            url: '/base/close-loan',
            icon: 'icon-puzzle'
          },
        ]
      },

      {

        name: 'Disbursement',
        url: '/Loan',
        icon: 'icon-puzzle',
        children: [
        {
          name: 'Disburse Loan',
          url: '/base/loan-payment',
          icon: 'icon-puzzle'
        },
        {
          name: 'Disbursed Loans',
          url: '/base/disbursed-loans',
          icon: 'icon-puzzle'
        },
      ]
        
      },
      {
        name: 'Installments',
        url: '/base/loan-emi',
        icon: 'icon-puzzle'
      },
      
      {
        name: 'Reports',
        url: '/base',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Loan Status',
            url: '/base/loan-repo',
            icon: 'icon-puzzle'
          },
          {
            name: 'Loan Holders',
            url: '/base/loan-holders',
            icon: 'icon-puzzle'
          },
          {
            name: 'Loan Penalty',
            url: '/base/loan-penlty-repo',
            icon: 'icon-puzzle'
          },
          {
            name: 'Collection Report',
            url: '/base/loan-collection-report',
            icon: 'icon-puzzle'
          },
     ]
      },
      {
        name: 'Penlty',
        url: '/base/loan-penlty',
        icon: 'icon-puzzle'
      },
  ]
  },
  {
    name: 'Expense',
    url: '/Expense',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Expense Types',
        url: '/base/expense-types',
        icon: 'icon-puzzle'
      },
      {
        name: 'Add Expenses',
        url: '/base/expense-detail',
        icon: 'icon-puzzle'
      },
      {
        name: 'Expenses Report',
        url: '/base/expense-report',
        icon: 'icon-puzzle'
      },
     
      
    ]
  },
  {
    name: 'Firm',
    url: '/Expense',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'New Loan',
        url: '/base/firm-loan',
        icon: 'icon-puzzle'
      },
      {
        name: 'Close Loan',
        url: '/base/firm-loan-close',
        icon: 'icon-puzzle'
      },
      {
        name: 'Report',
        url: '/base/firm-loan-repo',
        icon: 'icon-puzzle'
      },
      {
        name: 'New Short Term Loan',
        url: '/base/short-term-loan',
        icon: 'icon-puzzle'
      },
      {
        name: 'Close Short Term Loan',
        url: '/base/short-term-loan-close',
        icon: 'icon-puzzle'
      },
      {
        name: 'Report Short Term Loan',
        url: '/base/short-term-loan-Report',
        icon: 'icon-puzzle'
      },
    ]
  },
   {   name: 'Fixed Deposite',
        url: '/FD',
        icon: 'icon-puzzle',
        children: [
          
          {
            name: 'Account',
            url: '/base/fdaccount',
            icon: 'icon-puzzle',
            children:[
              {
                name: 'New',
                url: '/base/fdaccount',
                icon: 'icon-puzzle'
              },
              {
                name: 'View',
                url: '/base/fdaccountview',
                icon: 'icon-puzzle'
              },
              {
                name: 'Close',
                url: '/base/fdaccountclose',
                icon: 'icon-puzzle'
              },
            ],
          },
          {
            name: 'Interest',
            url: '/base/fdaccount',
            icon: 'icon-puzzle',
            children:[
              {
                name: 'Pay',
                url: '/base/fdpayinterest',
                icon: 'icon-puzzle'
              },
          ],
        },
        {
          name: 'Reports',
          url: '/base/fdaccount',
          icon: 'icon-puzzle',
          children:[
            {
              name: 'Status',
              url: '/base/fdaccountreport',
              icon: 'icon-puzzle'
            },
            {
              name: 'Holders',
              url: '/base/fdcustreport',
              icon: 'icon-puzzle'
            },
        ],
      },
        ],
      },

  {
    divider: true
  },
  
 
 
];
