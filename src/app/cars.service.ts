import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private cars = [
    {
      id: 1,
      name: 'Civic',
      model: '2022',
      brand: 'Honda',
      price: 25000,
      details: 'The Honda Civic is a line of cars manufactured by Honda.',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-nWm0Z7JT4fXzTn29DoqVwHaEs%26pid%3DApi&f=1&ipt=fd69105831e52de8b93287dcd8f59398473a43df7ce226193b7787ee745100e2&ipo=images' 
    },
    {
      id: 2,
      name: 'Accord',
      model: '2023',
      brand: 'Honda',
      price: 30000,
      details: 'The Honda Accord is a series of automobiles manufactured by Honda.',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.vtaTPJZ2xl9B5nKJVJYhLAHaEK%26pid%3DApi&f=1&ipt=8e2a6c2954499f2d6e8a831c1903a062838ef774b0225a97d6082b3d9fbcd836&ipo=images' 
    },
    {
      id: 3,
      name: 'Corolla',
      model: '2022',
      brand: 'Toyota',
      price: 23000,
      details: 'The Toyota Corolla is a line of subcompact and compact cars manufactured by Toyota.',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.haSIEsLCYN0gxZWsOKplswHaE7%26pid%3DApi&f=1&ipt=7017930891c631e0c7bb10361e3e683f891ac81ffdd480cac4afbc3d1a6ef6c3&ipo=images' 
    },
    {
      id: 4,
      name: 'Camry',
      model: '2023',
      brand: 'Toyota',
      price: 32000,
      details: 'The Toyota Camry is an automobile sold internationally by the Japanese manufacturer Toyota.',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.L_mQG_MN_Fp14HraS6d9AAHaD5%26pid%3DApi&f=1&ipt=560faaade63cf34ca56cbc6444db90c601dc1ed1d389fb5c8129e744ac0ca753&ipo=images' 
    },
    {
      id: 5,
      name: 'F-150',
      model: '2022',
      brand: 'Ford',
      price: 40000,
      details: 'The Ford F-Series is a series of trucks that have been marketed and manufactured by Ford Motor Company.',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.fordtips.com%2Fwp-content%2Fuploads%2F2021%2F01%2F2022-Ford-F-150-release-date.jpg%3Ffit%3D1200%252C745%26ssl%3D1&f=1&nofb=1&ipt=c9a49476ab7ff75c16a15fbc10ea5784cf9f457344611e3c1d356efec631d595&ipo=images' 
    },
    {
      id: 6,
      name: 'Mustang',
      model: '2022',
      brand: 'Ford',
      price: 35000,
      details: 'The Ford Mustang is a series of American automobiles manufactured by Ford.',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.QMiiM-Pwrm6spGXB797CeAHaD6%26pid%3DApi&f=1&ipt=ec773d6a153a3fd682aec66bb8e5296509f31a9d60d2b5470ca4967e019e90c4&ipo=images' 
    },
    {
      id: 7,
      name: '3 Series',
      model: '2023',
      brand: 'BMW',
      price: 45000,
      details: 'The BMW 3 Series is a compact executive car manufactured by the German automaker BMW.',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.to6t27AfcdiWjaB8YihseAHaE8%26pid%3DApi&f=1&ipt=745f4a3a279e573db5046d2d7d2d6699b7b21aec79c1d96d19591765f6274397&ipo=images' 
    },
    {
      id: 8,
      name: '5 Series',
      model: '2023',
      brand: 'BMW',
      price: 55000,
      details: 'The BMW 5 Series is an executive car manufactured by BMW since 1972.',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dzKIZgcwkYXeq3vW04AY4wHaEK%26pid%3DApi&f=1&ipt=be9e87286c60ac2d65f96cbc193f0a40d506f17fc6db175d97abdcbe8af86735&ipo=images' 
    },
    {
      id: 9,
      name: 'A4',
      model: '2022',
      brand: 'Audi',
      price: 42000,
      details: 'The Audi A4 is a line of compact executive cars produced since 1994 by the German car manufacturer Audi.',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mO2wjKtLG-phKiFNBfMdWgHaEK%26pid%3DApi&f=1&ipt=871f5dd3850c0563e13d0d69925586aa2a2684c855502d51eea8a91a88507a40&ipo=images' 
    },
    {
      id: 10,
      name: 'A6',
      model: '2023',
      brand: 'Audi',
      price: 60000,
      details: 'The Audi A6 is an executive car made by the German automaker Audi.',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.wiGGhj2s9CuTOzw7-SFKjwHaE8%26pid%3DApi&f=1&ipt=a85e8cabd12d527bccf728572c776d0e6602a96a141acce70ece57ef1c3542b7&ipo=images' 
    },
    {
      id: 11,
      name: 'Model 3',
      model: '2022',
      brand: 'Tesla',
      price: 55000,
      details: 'The Tesla Model 3 is a fully electric four-door fastback sedan developed by Tesla.',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.64eUFvuWSA4QG8c_gCqhLgHaEo%26pid%3DApi&f=1&ipt=b47dea61d6d456301a5b7f6841a6a610b7442ae22755ab8ad151d3f1d79c823a&ipo=images' 
    },
    {
      id: 12,
      name: 'Model S',
      model: '2023',
      brand: 'Tesla',
      price: 80000,
      details: 'The Tesla Model S is a fully electric luxury sedan produced by Tesla, Inc.',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.olYc1wc67CHOguhPafwwggHaEo%26pid%3DApi&f=1&ipt=8af69ae850b4a92a4235bd3abe1119870dd9d28e98773f7cc308a075a77c961d&ipo=images' 
    },
  ];

  constructor() { }

  getAllCars() {
    return this.cars;
  }

  getCarById(id:any) {
    return this.cars.find(car => car.id === id)
  }
}
