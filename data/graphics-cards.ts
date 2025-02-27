export const graphicsCards = {
    Nvidia: [
      {
        id: 1,
        model: "GeForce RTX 4090",
        price: 2200,
        image: "/rtx-4090ti.png",
        vram: "24 GB GDDR6X",
        memoryBus: "384-bit",
        coreClock: "2235 MHz",
        boostClock: "2520 MHz",
        tdp: "450 W",
        powerConnectors: "1x 16-pin",
        ports: "3x DisplayPort 1.4a, 1x HDMI 2.1a"
      },
      {
        id: 2,
        model: "GeForce RTX 3080",
        price: 800,
        image: "/rtx-3080.png",
        vram: "10 GB GDDR6X",
        memoryBus: "320-bit",
        coreClock: "1440 MHz",
        boostClock: "1710 MHz",
        tdp: "320 W",
        powerConnectors: "2x 8-pin",
        ports: "3x DisplayPort 1.4a, 1x HDMI 2.1"
      },
      {
        id: 3,
        model: "GeForce GTX 1060",
        price: 150,
        image: "/gtx-1060.png",
        vram: "6 GB GDDR5",
        memoryBus: "192-bit",
        coreClock: "1506 MHz",
        boostClock: "1708 MHz",
        tdp: "120 W",
        powerConnectors: "1x 6-pin",
        ports: "3x DisplayPort 1.4, 1x HDMI 2.0b"
      }
    ],
    AMD: [
      {
        id: 1,
        model: "Radeon RX 7900 XTX",
        price: 1000,
        image: "/RX-7900-XTX.png",
        vram: "24 GB GDDR6",
        memoryBus: "384-bit",
        coreClock: "2300 MHz",
        boostClock: "2500 MHz",
        tdp: "355 W",
        powerConnectors: "2x 8-pin",
        ports: "2x DisplayPort 2.1, 1x HDMI 2.1, 1x USB-C"
      },
      {
        id: 2,
        model: "Radeon RX 6800 XT",
        price: 600,
        image: "/RX-6800-XT.png",
        vram: "16 GB GDDR6",
        memoryBus: "256-bit",
        coreClock: "2015 MHz",
        boostClock: "2250 MHz",
        tdp: "300 W",
        powerConnectors: "2x 8-pin",
        ports: "2x DisplayPort 1.4, 1x HDMI 2.1, 1x USB-C"
      },
      {
        id: 3,
        model: "Radeon RX 570",
        price: 90,
        image: "/RX-570.png",
        vram: "4 GB GDDR5",
        memoryBus: "256-bit",
        coreClock: "1168 MHz",
        boostClock: "1244 MHz",
        tdp: "150 W",
        powerConnectors: "1x 8-pin",
        ports: "1x DisplayPort 1.4, 1x HDMI 2.0, 1x DVI-D"
      }
    ],
    Intel: [
      {
        id: 1,
        model: "Arc A770",
        price: 350,
        image: "/ASRock-Intel-Arc-A770-Phantom.png",
        vram: "16 GB GDDR6",
        memoryBus: "256-bit",
        coreClock: "2100 MHz",
        boostClock: "2400 MHz",
        tdp: "225 W",
        powerConnectors: "1x 8-pin + 1x 6-pin",
        ports: "3x DisplayPort 2.0, 1x HDMI 2.1"
      },
      {
        id: 2,
        model: "Arc A580",
        price: 220,
        image: "/Sparkle-Ar-_B580-Titan-OC-12GB.png",
        vram: "8 GB GDDR6",
        memoryBus: "256-bit",
        coreClock: "1700 MHz",
        boostClock: "2000 MHz",
        tdp: "185 W",
        powerConnectors: "1x 8-pin",
        ports: "2x DisplayPort 2.0, 2x HDMI 2.1"
      }
    ]
  };