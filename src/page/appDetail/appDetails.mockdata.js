/* eslint-disable max-len */
export default [
  {
    id: '123',
    info: {
      logo: 'https://dappimg.com/media/image/dapp/dc3c0e41e3234f7c8001385893117444.jpg',
      collects: 2,
      appName: 'Rabbids Token',
      rate: 2.5,
      description: 'What is Rabbids Token? Rabbids Tokens are like the Rabbids themselves: mischievous, unpredictable and elusive! They transform every time they get a new owner. Catching them is easy and for a good cause — you make a donation to UNICEF when you nab one from its owner!',
      tags: [
        {
          name: 'App',
          logo: 'https://dappimg.com/media/image/category/66b0ce7f954b4789b4fa83b848b643b6.png'
        },
        {
          name: 'Incognito',
          logo: 'https://dappimg.com/media/image/category/66b0ce7f954b4789b4fa83b848b643b6.png'
        }
      ],
      keywords: ['NTF', 'Collectible', '3D', 'Listed Company'],
      userStatistics: {
        lastDay: 24,
        uniqueUsers: 147
      }
    },
    about: {
      sliders: [
        {
          src: 'https://dappimg.com/media/image/dapp/4fa4f1c6fb7945c1b250d198e6a5f82a.jpg'
        },
        {
          src: 'https://dappimg.com/media/image/dapp/1ceeb5482edd4943bd6e632e440a578f.jpg'
        }
      ],
      ref: {
        title: 'Around the Project',
        article: {
          title: 'Grab And Collect All The Rabbids Tokens! Get Surprised On Full-Moon!',
          desc: 'rabbids, nft, token, game, collect, collectible, charity, 3D'
        },
        img: 'https://dappimg.com/media/image/article/0387d7d3a96c478f829f322585885b45.jpg'
      }
    },
    statistics: {
      balance: 0,
      smartContracts: {
        total: 4,
        list: []
      },
      chartStatistics: {
        web: {
          title: 'Papp.com store',
          options: {
            chart: {
              type: 'areaspline'
            },
            title: {
              text: null
            },
            xAxis: {
              labels: {
                formatter() {
                  if (this.isFirst || this.isLast) {
                    return this.value;
                  }
                  return '';
                }
              },
              categories: ['09.23', '09.24', '09.25', '09.26', '09.27', '09.28', '09.29', '09.30', '10.1', '10.2', '10.3', '10.4', '10.5', '10.6', '10.7', '10.8', '10.9', '10.10', '10.11', '10.12', '10.13', '10.14', '10.15', '10.16', '10.17', '10.18', '10.19', '10.20', '10.21', '10.22', '10.23'],
              minPadding: 0,
              maxPadding: 0
            },
            credits: {
              enabled: false
            },
            tooltip: {
              pointFormat: '{point.y:,.0f}'
            },
            plotOptions: {
              areaspline: {
                lineColor: '#7c5aff',
                marker: {
                  enabled: false
                }
              }
            },
            series: [{
              showInLegend: false,
              color: '#e5deff',
              data: [83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 92, 50, 83, 9, 95, 61, 5, 51, 87, 50, 99, 4, 54, 43, 98, 6]
            }]
          },
          statistics: [
            {
              title: "Today's Score",
              value: 40
            },
            {
              title: 'Weekly Average',
              value: 29
            },
            {
              title: 'Best Score',
              value: 29
            }
          ]
        },
        users: {
          title: 'Users',
          options: {
            chart: {
              type: 'areaspline'
            },
            title: {
              text: null
            },
            xAxis: {
              labels: {
                formatter() {
                  if (this.isFirst || this.isLast) {
                    return this.value;
                  }
                  return '';
                }
              },
              categories: ['09.23', '09.24', '09.25', '09.26', '09.27', '09.28', '09.29', '09.30', '10.1', '10.2', '10.3', '10.4', '10.5', '10.6', '10.7', '10.8', '10.9', '10.10', '10.11', '10.12', '10.13', '10.14', '10.15', '10.16', '10.17', '10.18', '10.19', '10.20', '10.21', '10.22', '10.23'],
              minPadding: 0,
              maxPadding: 0
            },
            credits: {
              enabled: false
            },
            tooltip: {
              pointFormat: '{point.y:,.0f}'
            },
            plotOptions: {
              areaspline: {
                lineColor: '#f68924',
                marker: {
                  enabled: false
                }
              }
            },
            series: [{
              showInLegend: false,
              color: '#fde5d1',
              data: [83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 92, 50, 83, 9, 95, 61, 5, 51, 87, 50, 99, 4, 54, 43, 98, 6]
            }]
          },
          statistics: [
            {
              title: 'Total Unique Users',
              value: 148
            },
            {
              title: '24Hr Users',
              value: 1
            },
            {
              title: '7Day Users',
              value: 1
            },
            {
              title: '24Hr Highest',
              value: 50
            }
          ]
        },
        transactions: {
          title: 'Transactions',
          options: {
            chart: {
              type: 'areaspline'
            },
            title: {
              text: null
            },
            xAxis: {
              labels: {
                formatter() {
                  if (this.isFirst || this.isLast) {
                    return this.value;
                  }
                  return '';
                }
              },
              categories: ['09.23', '09.24', '09.25', '09.26', '09.27', '09.28', '09.29', '09.30', '10.1', '10.2', '10.3', '10.4', '10.5', '10.6', '10.7', '10.8', '10.9', '10.10', '10.11', '10.12', '10.13', '10.14', '10.15', '10.16', '10.17', '10.18', '10.19', '10.20', '10.21', '10.22', '10.23'],
              minPadding: 0,
              maxPadding: 0
            },
            credits: {
              enabled: false
            },
            tooltip: {
              pointFormat: '{point.y:,.0f}'
            },
            plotOptions: {
              areaspline: {
                lineColor: '#48bf5c',
                marker: {
                  enabled: false
                }
              }
            },
            series: [{
              showInLegend: false,
              color: '#d6f1da',
              data: [83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 92, 50, 83, 9, 95, 61, 5, 51, 87, 50, 99, 4, 54, 43, 98, 6]
            }]
          },
          statistics: [
            {
              title: 'Total Unique Transactions',
              value: 123
            },
            {
              title: '24Hr Transactions',
              value: 324
            },
            {
              title: '7Day Transactions',
              value: 687
            },
            {
              title: '24Hr Highest',
              value: 543
            }
          ]
        },
        volume: {
          title: 'Volume',
          options: {
            chart: {
              type: 'areaspline'
            },
            title: {
              text: null
            },
            xAxis: {
              labels: {
                formatter() {
                  if (this.isFirst || this.isLast) {
                    return this.value;
                  }
                  return '';
                }
              },
              categories: ['09.23', '09.24', '09.25', '09.26', '09.27', '09.28', '09.29', '09.30', '10.1', '10.2', '10.3', '10.4', '10.5', '10.6', '10.7', '10.8', '10.9', '10.10', '10.11', '10.12', '10.13', '10.14', '10.15', '10.16', '10.17', '10.18', '10.19', '10.20', '10.21', '10.22', '10.23'],
              minPadding: 0,
              maxPadding: 0
            },
            credits: {
              enabled: false
            },
            tooltip: {
              pointFormat: '{point.y:,.0f}'
            },
            plotOptions: {
              areaspline: {
                lineColor: '#3c6eff',
                marker: {
                  enabled: false
                }
              }
            },
            series: [{
              showInLegend: false,
              color: '#b5c8ff',
              data: [83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 92, 50, 83, 9, 95, 61, 5, 51, 87, 50, 99, 4, 54, 43, 98, 6]
            }]
          },
          statistics: [
            {
              title: 'Total Unique Volume',
              value: 1482
            },
            {
              title: '24Hr Volume',
              value: 124
            },
            {
              title: '7Day Volume',
              value: 223
            },
            {
              title: '24Hr Highest',
              value: 50
            }
          ]
        }
      }
    },
    comments: [
      {
        name: 'masoly88',
        date: '2020.10.10',
        content: "A simple and easy to use interface, you can start withdrawals a second after investing, plans designed with sustainability in mind. It's powered with Smart Contract technology and the Smart Contract is verified and opensource.",
        rate: 4,
        avatar: '/reviewer-default-avatar.png'
      },
      {
        name: 'masoly88',
        date: '2020.10.10',
        content: "A simple and easy to use interface, you can start withdrawals a second after investing, plans designed with sustainability in mind. It's powered with Smart Contract technology and the Smart Contract is verified and opensource.",
        rate: 4,
        avatar: '/reviewer-default-avatar.png'
      }
    ]
  }
];
