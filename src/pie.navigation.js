export const DonutConfig = {
  outerCircle: {
    borderWidth: 0,
    innerSize: 240,
    size: 360,

    styles: {
      border: 0,
    },

    dataLabels: {
      useHTML: true,
      distance: 5,

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
    innerSize: 200,

    size: 300,
    dataLabels: {
      distance: 65,
      softConnector: false,

      style: {
        textOutline: 'none',
        color: '#7D9563',
      },
      formatter: function () {
        return this.point.name;
      },
    },
    data: [
      {
        name: 'PLANNING',
        y: 20,
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
        y: 30,
        color: '#2ea4a8',
      },
      {
        name: 'EARLY WARNING',
        y: 40,
        color: '#49bea7',
      },
      {
        name: 'RESOURCE MAP',
        y: 35,
        color: '#9dc13b',
      },
    ],
  },
};
