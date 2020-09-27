export const DonutConfig = {
  outerCircle: {
    borderWidth: 0,
    innerSize: 230,
    size: 350,

    styles: {
      border: 0,
    },

    dataLabels: {
      useHTML: true,
      distance: 40,
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

    size: 280,
    dataLabels: {
      useHTML: true,
      inside: true,
      distance: 14,
      y: -4,
      formatter: function () {
        return this.point.name;
      },
      style: {
        fontWeight: '900',
      },
    },
    data: [
      {
        name: 'RESOURCE MAP',
        y: 35,
        color: '#9dc13b',
      },
      {
        name: 'PLANNING',
        y: 30,
        color: '#f89b3f',
      },
      {
        name: 'IMPLEMENTATION',
        y: 40,
        color: '#dd8080',
      },
      {
        name: 'DATA & ANALYSIS',
        y: 25.5,
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
