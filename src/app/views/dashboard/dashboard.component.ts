import { Component, OnInit } from '@angular/core';

import { customTooltips } from "@coreui/chartjs";
import { getStyle, hexToRgba } from '@coreui/utils/src';

import { LoanserviceService } from '../../Services/loanservice.service';
import { DashBoardServiceService } from '../../Services/dash-board-service.service';
import { AppSummary } from '../../Module/app-summary';
import { LoanSummary } from '../../Module/loan-summary';
import { FdSummary } from '../../Module/fd-summary';


@Component({
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    radioModel: string = 'Month';
    appSummary: AppSummary;
    loanSummary: LoanSummary;
    fdSummary: FdSummary;
    totalcredit: number;
    totalDebitBalSummary: number;
    totalCreditBalSummary: number;
    totaolDebit: number;
    totalClosingBal: number;
    pendingCollection: number;
    closingBalSummary: number;

    constructor(private loanservice: LoanserviceService, private dashboardService: DashBoardServiceService) { 
        this.totalcredit = 0;
        this.totalDebitBalSummary = 0;
        this.totalCreditBalSummary = 0;
        this.totaolDebit = 0;
        this.totalClosingBal = 0;
        this.pendingCollection = 0;
        this.closingBalSummary = 0;

        this.appSummary = new AppSummary(null);
        this.loanSummary = new LoanSummary(null);
        this.fdSummary = new FdSummary(null);
    }


    // lineChart1
    public lineChart1Data: Array<any> = [
        {
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'Series A'
        }
    ];
    public lineChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChart1Options: any = {
        tooltips: {
            enabled: false,
            custom: customTooltips
        },
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent',
                }

            }],
            yAxes: [{
                display: false,
                ticks: {
                    display: false,
                    min: 40 - 5,
                    max: 84 + 5,
                }
            }],
        },
        elements: {
            line: {
                borderWidth: 1
            },
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
            },
        },
        legend: {
            display: false
        }
    };
    public lineChart1Colours: Array<any> = [
        {
            backgroundColor: getStyle('--primary'),
            borderColor: 'rgba(255,255,255,.55)'
        }
    ];
    public lineChart1Legend = false;
    public lineChart1Type = 'line';

    // lineChart2
    public lineChart2Data: Array<any> = [
        {
            data: [1, 18, 9, 17, 34, 22, 11],
            label: 'Series A'
        }
    ];
    public lineChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChart2Options: any = {
        tooltips: {
            enabled: false,
            custom: customTooltips
        },
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent',
                }

            }],
            yAxes: [{
                display: false,
                ticks: {
                    display: false,
                    min: 1 - 5,
                    max: 34 + 5,
                }
            }],
        },
        elements: {
            line: {
                tension: 0.00001,
                borderWidth: 1
            },
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
            },
        },
        legend: {
            display: false
        }
    };
    public lineChart2Colours: Array<any> = [
        { // grey
            backgroundColor: getStyle('--info'),
            borderColor: 'rgba(255,255,255,.55)'
        }
    ];
    public lineChart2Legend = false;
    public lineChart2Type = 'line';


    // lineChart3
    public lineChart3Data: Array<any> = [
        {
            data: [78, 81, 80, 45, 34, 12, 40],
            label: 'Series A'
        }
    ];
    public lineChart3Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChart3Options: any = {
        tooltips: {
            enabled: false,
            custom: customTooltips
        },
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }]
        },
        elements: {
            line: {
                borderWidth: 2
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
            },
        },
        legend: {
            display: false
        }
    };
    public lineChart3Colours: Array<any> = [
        {
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)',
        }
    ];
    public lineChart3Legend = false;
    public lineChart3Type = 'line';


    // barChart1
    public barChart1Data: Array<any> = [
        {
            data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
            label: 'Series A'
        }
    ];
    public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
    public barChart1Options: any = {
        tooltips: {
            enabled: false,
            custom: customTooltips
        },
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                display: false,
                barPercentage: 0.6,
            }],
            yAxes: [{
                display: false
            }]
        },
        legend: {
            display: false
        }
    };
    public barChart1Colours: Array<any> = [
        {
            backgroundColor: 'rgba(255,255,255,.3)',
            borderWidth: 0
        }
    ];
    public barChart1Legend = false;
    public barChart1Type = 'bar';

    // mainChart

    public mainChartElements = 27;
    public mainChartData1: Array<number> = [];
    public mainChartData2: Array<number> = [];
    public mainChartData3: Array<number> = [];

    public mainChartData: Array<any> = [
        {
            data: this.mainChartData1,
            label: 'Current'
        },
        {
            data: this.mainChartData2,
            label: 'Previous'
        },
        {
            data: this.mainChartData3,
            label: 'BEP'
        }
    ];
    /* tslint:disable:max-line-length */
    public mainChartLabels: Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    /* tslint:enable:max-line-length */
    public mainChartOptions: any = {
        tooltips: {
            enabled: false,
            custom: customTooltips,
            intersect: true,
            mode: 'index',
            position: 'nearest',
            callbacks: {
                labelColor: function (tooltipItem: any, chart: any) {
                    return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                },
                ticks: {
                    callback: function (value: any) {
                        return value.charAt(0);
                    }
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250
                }
            }]
        },
        elements: {
            line: {
                borderWidth: 2
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            }
        },
        legend: {
            display: false
        }
    };
    public mainChartColours: Array<any> = [
        { // brandInfo
            backgroundColor: hexToRgba(getStyle('--info'), 10),
            borderColor: getStyle('--info'),
            pointHoverBackgroundColor: '#fff'
        },
        { // brandSuccess
            backgroundColor: 'transparent',
            borderColor: getStyle('--success'),
            pointHoverBackgroundColor: '#fff'
        },
        { // brandDanger
            backgroundColor: 'transparent',
            borderColor: getStyle('--danger'),
            pointHoverBackgroundColor: '#fff',
            borderWidth: 1,
            borderDash: [8, 5]
        }
    ];
    public mainChartLegend = false;
    public mainChartType = 'line';

    // social box charts

    public brandBoxChartData1: Array<any> = [
        {
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'Facebook'
        }
    ];
    public brandBoxChartData2: Array<any> = [
        {
            data: [1, 13, 9, 17, 34, 41, 38],
            label: 'Twitter'
        }
    ];
    public brandBoxChartData3: Array<any> = [
        {
            data: [78, 81, 80, 45, 34, 12, 40],
            label: 'LinkedIn'
        }
    ];
    public brandBoxChartData4: Array<any> = [
        {
            data: [35, 23, 56, 22, 97, 23, 64],
            label: 'Google+'
        }
    ];

    public brandBoxChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public brandBoxChartOptions: any = {
        tooltips: {
            enabled: false,
            custom: customTooltips
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
            }]
        },
        elements: {
            line: {
                borderWidth: 2
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            }
        },
        legend: {
            display: false
        }
    };
    public brandBoxChartColours: Array<any> = [
        {
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)',
            pointHoverBackgroundColor: '#fff'
        }
    ];
    public brandBoxChartLegend = false;
    public brandBoxChartType = 'line';

    public random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    ngOnInit(): void {
        // generate random values for mainChart
        for (let i = 0; i <= this.mainChartElements; i++) {
            this.mainChartData1.push(this.random(50, 200));
            this.mainChartData2.push(this.random(80, 100));
            this.mainChartData3.push(65);
        }

        this.dashboardService.getAllSummaryRepo('Opened', 'Active').subscribe(data => {
            this.totalcredit = 0;
            this.appSummary = data;
            this.loanSummary = this.appSummary.loanSummary;
            this.fdSummary = this.appSummary.fdSummary;
            this.totalcredit = this.loanSummary.collections + this.loanSummary.penalty + this.fdSummary.fdAmount + this.appSummary.firmLoan;
            this.totaolDebit = this.loanSummary.disbursements + this.fdSummary.paidInterest + this.appSummary.expenses + this.appSummary.shortTermLoan;
            this.totalClosingBal = this.totalcredit - this.totaolDebit;

            this.totalDebitBalSummary = this.fdSummary.fdAmount + this.appSummary.firmLoan + this.fdSummary.pendingIntrest;
            this.totalCreditBalSummary = Math.floor(this.loanSummary.disbursements + this.loanSummary.loanIntrest + this.loanSummary.processingFees);
            this.pendingCollection = this.totalCreditBalSummary - this.loanSummary.collections;
            this.closingBalSummary = this.pendingCollection - this.totalDebitBalSummary;
        })


    }

}
