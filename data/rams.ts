export type RamType = {
  id: number;
  model: string;
  price: number;
  image: string;
  type: string;
  capacity: string;
  speed: string;
  voltage: string;
  latency: string;
};

export const rams: RamType[] = [
  {
    id: 1,
    model: "2GB DDR3",
    price: 25,
    image: "/ram-2gb-ddr3.png",
    type: "DDR3",
    capacity: "2GB",
    speed: "1333 MHz",
    voltage: "1.5V",
    latency: "CL9",
  },
  {
    id: 2,
    model: "4GB DDR3",
    price: 35,
    image: "/ram-4gb-ddr3.png",
    type: "DDR3",
    capacity: "4GB",
    speed: "1600 MHz",
    voltage: "1.5V",
    latency: "CL11",
  },
  {
    id: 3,
    model: "8GB DDR4",
    price: 50,
    image: "/ram-8gb-ddr4.png",
    type: "DDR4",
    capacity: "8GB",
    speed: "2400 MHz",
    voltage: "1.2V",
    latency: "CL16",
  },
  {
    id: 4,
    model: "16GB DDR4",
    price: 75,
    image: "/ram-16gb-ddr4.png",
    type: "DDR4",
    capacity: "16GB",
    speed: "3200 MHz",
    voltage: "1.2V",
    latency: "CL18",
  },
  {
    id: 5,
    model: "32GB DDR5",
    price: 120,
    image: "/ram-32gb-ddr5.png",
    type: "DDR5",
    capacity: "32GB",
    speed: "4800 MHz",
    voltage: "1.1V",
    latency: "CL40",
  },
  {
    id: 6,
    model: "64GB DDR6",
    price: 250,
    image: "/ram-64gb-ddr6.png",
    type: "DDR6",
    capacity: "64GB",
    speed: "6400 MHz",
    voltage: "1.0V",
    latency: "CL48",
  },
  {
    id: 7,
    model: "128GB DDR5",
    price: 400,
    image: "/ram-128gb-ddr5.png",
    type: "DDR5",
    capacity: "128GB",
    speed: "5600 MHz",
    voltage: "1.1V",
    latency: "CL40",
  },
];
