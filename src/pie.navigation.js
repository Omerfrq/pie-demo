export const DonutConfig = {
  outerCircle: {
    borderWidth: 0,
    innerSize: 230,
    size: 260,
    styles: {
      border: 0,
    },

    dataLabels: {
      useHTML: true,

      formatter: function () {
        return `<b>${this.point.name}</b>`;
      },
    },
    data: [
      {
        name: 'COMPREHENSIVE SUPPORT',
        y: 50,
        color: '#403f66',
      },
      {
        name: 'TECH INFRASTRUCTURE: PURPLESENSE',
        y: 50,
        color: '#5b68c4',
      },
    ],
  },
  innerCircle: {
    borderWidth: 0,
    innerSize: 200,

    size: 230,
    dataLabels: {
      useHTML: true,
      inside: true,
      formatter: function () {
        return this.point.name;
      },
      color: '#333',
    },
    data: [
      {
        name: 'ONLINE REFERRAL SYSTEM',
        y: 40,
        color: '#49bea7',
      },
      {
        name: 'EARLY WINNING',
        y: 40,
        color: '#2ea4a8',
      },
      {
        name: 'DATA & ANALYSIS',
        y: 40,
        color: '#9dc13b',
      },
      {
        name: 'IMPLEMENTATION',
        y: 50,
        color: '#dd8080',
      },
      {
        name: 'PLANNING',
        y: 30,
        color: '#f89b3f',
      },
      {
        name: 'RESOURCE MAPPING',
        y: 35,
        color: '#ae5983',
      },
    ],
  },
};
