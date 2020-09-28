export const DonutConfig = {
  outerCircle: {
    borderWidth: 0,
    innerSize: 240,
    size: 370,

    styles: {
      border: 0,
    },

    dataLabels: {
      useHTML: true,
      distance: 50,

      style: {
        fontSize: '13px',
        fontWeight: 900,
        color: '#7D9563',
        padding: 30,
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
    innerSize: 210,

    size: 287,
    dataLabels: {
      distance: 38,

      formatter: function () {
        return this.point.name;
      },
      style: {
        color: '#7D9563',
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
