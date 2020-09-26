export const DonutConfig = {
  outerCircle: {
    borderWidth: 0,
    innerSize: 230,
    size: 315,

    styles: {
      border: 0,
    },

    dataLabels: {
      useHTML: true,
      distance: 0,
      style: {
        fontSize: '13px',
        fontWeight: 900,
      },
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

    size: 260,
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
        name: 'RESOURCE MAP',
        y: 35,
        color: '#9dc13b',
      },
      {
        name: 'PLANNING',
        y: 20,
        color: '#f89b3f',
      },
      {
        name: 'IMPLEMENTATION',
        y: 45,
        color: '#dd8080',
      },
      {
        name: 'DATA & ANALYSIS',
        y: 40,
        color: '#ae5983',
      },
      {
        name: 'ONLINE REFERRAL SYSTEM',
        y: 40,
        color: '#2ea4a8',
      },
      {
        name: 'EARLY WARNING',
        y: 40,
        color: '#49bea7',
      },
    ],
  },
};
