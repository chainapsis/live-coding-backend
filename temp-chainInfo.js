

const chainIdInfos= {
    "agoric-3": {
      rest: "https://lcd-agoric.keplr.app",
      restSub: "https://rest.cosmos.directory/agoric",
      bip44: {
        coinType: 564,
      },
      bech32Config: {
        bech32PrefixAccAddr: "agoric",
        bech32PrefixAccPub: "agoricpub",
        bech32PrefixValAddr: "agoricvaloper",
        bech32PrefixValPub: "agoricvaloperpub",
        bech32PrefixConsAddr: "agoricvalcons",
        bech32PrefixConsPub: "agoricvalconspub",
      },
    },
    "akashnet-2": {
      rest: "https://lcd-akash.keplr.app",
      restSub: "https://rest.cosmos.directory/akash",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "akash",
        bech32PrefixAccPub: "akashpub",
        bech32PrefixValAddr: "akashvaloper",
        bech32PrefixValPub: "akashvaloperpub",
        bech32PrefixConsAddr: "akashvalcons",
        bech32PrefixConsPub: "akashvalconspub",
      },
    },
    "axelar-dojo-1": {
      rest: "https://lcd-axelar.keplr.app",
      restSub: "https://rest.cosmos.directory/axelar",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "axelar",
        bech32PrefixAccPub: "axelarpub",
        bech32PrefixValAddr: "axelarvaloper",
        bech32PrefixValPub: "axelarvaloperpub",
        bech32PrefixConsAddr: "axelarvalcons",
        bech32PrefixConsPub: "axelarvalconspub",
      },
    },
    bostrom: {
      rest: "https://lcd-cyber.keplr.app",
      restSub: "https://rest.cosmos.directory/bostrom",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "bostrom",
        bech32PrefixAccPub: "bostrompub",
        bech32PrefixValAddr: "bostromvaloper",
        bech32PrefixValPub: "bostromvaloperpub",
        bech32PrefixConsAddr: "bostromvalcons",
        bech32PrefixConsPub: "bostromvalconspub",
      },
    },
    "phoenix-1": {
      rest: "https://lcd-phoenix.keplr.app",
      restSub: "https://rest.cosmos.directory/terra2",
      bip44: {
        coinType: 330,
      },
      bech32Config: {
        bech32PrefixAccAddr: "terra",
        bech32PrefixAccPub: "terrapub",
        bech32PrefixValAddr: "terravaloper",
        bech32PrefixValPub: "terravaloperpub",
        bech32PrefixConsAddr: "terravalcons",
        bech32PrefixConsPub: "terravalconspub",
      },
    },
    "core-1": {
      rest: "https://lcd-persistence.keplr.app",
      restSub: "https://rest.cosmos.directory/persistence",
      bip44: {
        coinType: 118,
      },
      alternativeBIP44s: [
        {
          coinType: 750,
        },
      ],
      bech32Config: {
        bech32PrefixAccAddr: "persistence",
        bech32PrefixAccPub: "persistencepub",
        bech32PrefixValAddr: "persistencevaloper",
        bech32PrefixValPub: "persistencevaloperpub",
        bech32PrefixConsAddr: "persistencevalcons",
        bech32PrefixConsPub: "persistencevalconspub",
      },
    },
    "cosmoshub-4": {
      rest: "https://lcd-cosmoshub.keplr.app",
      restSub: "https://rest.cosmos.directory/cosmoshub",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "cosmos",
        bech32PrefixAccPub: "cosmospub",
        bech32PrefixConsAddr: "cosmosvalcons",
        bech32PrefixConsPub: "cosmosvalconspub",
        bech32PrefixValAddr: "cosmosvaloper",
        bech32PrefixValPub: "cosmosvaloperpub",
      },
    },
    "crypto-org-chain-mainnet-1": {
      rest: "https://lcd-crypto-org.keplr.app",
      restSub: "https://rest.cosmos.directory/cryptoorgchain",
      bip44: {
        coinType: 394,
      },
      bech32Config: {
        bech32PrefixAccAddr: "cro",
        bech32PrefixAccPub: "cropub",
        bech32PrefixValAddr: "crocncl",
        bech32PrefixValPub: "crocnclpub",
        bech32PrefixConsAddr: "crocnclcons",
        bech32PrefixConsPub: "crocnclconspub",
      },
    },
    "emoney-3": {
      rest: "https://lcd-emoney.keplr.app",
      restSub: "https://rest.cosmos.directory/emoney",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "emoney",
        bech32PrefixAccPub: "emoneypub",
        bech32PrefixValAddr: "emoneyvaloper",
        bech32PrefixValPub: "emoneyvaloperpub",
        bech32PrefixConsAddr: "emoneyvalcons",
        bech32PrefixConsPub: "emoneyvalconspub",
      },
    },
    "evmos_9001-2": {
      rest: "https://lcd-evmos.keplr.app",
      restSub: "https://rest.cosmos.directory/evmos",
      bip44: {
        coinType: 60,
      },
      bech32Config: {
        bech32PrefixAccAddr: "evmos",
        bech32PrefixAccPub: "evmospub",
        bech32PrefixValAddr: "evmosvaloper",
        bech32PrefixValPub: "evmosvaloperpub",
        bech32PrefixConsAddr: "evmosvalcons",
        bech32PrefixConsPub: "evmosvalconspub",
      },
    },
    "gravity-bridge-3": {
      rest: "https://lcd-gravity-bridge.keplr.app",
      restSub: "https://rest.cosmos.directory/gravitybridge",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "gravity",
        bech32PrefixAccPub: "gravitypub",
        bech32PrefixValAddr: "gravityvaloper",
        bech32PrefixValPub: "gravityvaloperpub",
        bech32PrefixConsAddr: "gravityvalcons",
        bech32PrefixConsPub: "gravityvalconspub",
      },
    },
    "iov-mainnet-ibc": {
      rest: "https://lcd-iov.keplr.app",
      restSub: "https://rest.cosmos.directory/starname",
      bip44: {
        coinType: 234,
      },
      bech32Config: {
        bech32PrefixAccAddr: "star",
        bech32PrefixAccPub: "starpub",
        bech32PrefixValAddr: "starvaloper",
        bech32PrefixValPub: "starvaloperpub",
        bech32PrefixConsAddr: "starvalcons",
        bech32PrefixConsPub: "starvalconspub",
      },
    },
    "injective-1": {
      rest: "https://lcd-injective.keplr.app",
      restSub: "https://rest.cosmos.directory/injective",
      bip44: {
        coinType: 60,
      },
      bech32Config: {
        bech32PrefixAccAddr: "inj",
        bech32PrefixAccPub: "injpub",
        bech32PrefixValAddr: "injvaloper",
        bech32PrefixValPub: "injvaloperpub",
        bech32PrefixConsAddr: "injvalcons",
        bech32PrefixConsPub: "injvalconspub",
      },
    },
    "irishub-1": {
      rest: "https://lcd-iris.keplr.app",
      restSub: "https://rest.cosmos.directory/irisnet",
      bip44: {
        coinType: 118,
      },
      alternativeBIP44s: [
        {
          coinType: 566,
        },
      ],
      bech32Config: {
        bech32PrefixAccAddr: "iaa",
        bech32PrefixAccPub: "iap",
        bech32PrefixValAddr: "iva",
        bech32PrefixValPub: "ivp",
        bech32PrefixConsAddr: "ica",
        bech32PrefixConsPub: "icp",
      },
    },
    "ixo-4": {
      rest: "https://lcd-ixo.keplr.app",
      restSub: "https://rest.cosmos.directory/impacthub",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "ixo",
        bech32PrefixAccPub: "ixopub",
        bech32PrefixValAddr: "ixovaloper",
        bech32PrefixValPub: "ixovaloperpub",
        bech32PrefixConsAddr: "ixovalcons",
        bech32PrefixConsPub: "ixovalconspub",
      },
    },
    "juno-1": {
      rest: "https://lcd-juno.keplr.app",
      restSub: "https://rest.cosmos.directory/juno",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "juno",
        bech32PrefixAccPub: "junopub",
        bech32PrefixValAddr: "junovaloper",
        bech32PrefixValPub: "junovaloperpub",
        bech32PrefixConsAddr: "junovalcons",
        bech32PrefixConsPub: "junovalconspub",
      },
    },
    "kava_2222-10": {
      rest: "https://lcd-kava.keplr.app",
      restSub: "https://rest.cosmos.directory/kava",
      bip44: {
        coinType: 459,
      },
      alternativeBIP44s: [
        {
          coinType: 118,
        },
      ],
      bech32Config: {
        bech32PrefixAccAddr: "kava",
        bech32PrefixAccPub: "kavapub",
        bech32PrefixValAddr: "kavavaloper",
        bech32PrefixValPub: "kavavaloperpub",
        bech32PrefixConsAddr: "kavavalcons",
        bech32PrefixConsPub: "kavavalconspub",
      },
    },
    "mars-1": {
      rest: "https://lcd-mars.keplr.app",
      restSub: "https://rest.cosmos.directory/mars",
      bip44: {
        coinType: 118,
      },
      alternativeBIP44s: [
        {
          coinType: 330,
        },
      ],
      bech32Config: {
        bech32PrefixAccAddr: "mars",
        bech32PrefixAccPub: "marspub",
        bech32PrefixValAddr: "marsvaloper",
        bech32PrefixValPub: "marsvaloperpub",
        bech32PrefixConsAddr: "marsvalcons",
        bech32PrefixConsPub: "marsvalconspub",
      },
    },
    "osmosis-1": {
      rest: "https://lcd-osmosis.keplr.app",
      restSub: "https://rest.cosmos.directory/osmosis",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "osmo",
        bech32PrefixAccPub: "osmopub",
        bech32PrefixValAddr: "osmovaloper",
        bech32PrefixValPub: "osmovaloperpub",
        bech32PrefixConsAddr: "osmovalcons",
        bech32PrefixConsPub: "osmovalconspub",
      },
    },
    "quicksilver-2": {
      rest: "https://lcd-quicksilver.keplr.app",
      restSub: "https://rest.cosmos.directory/quicksilver",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "quick",
        bech32PrefixAccPub: "quickpub",
        bech32PrefixValAddr: "quickvaloper",
        bech32PrefixValPub: "quickvaloperpub",
        bech32PrefixConsAddr: "quickvalcons",
        bech32PrefixConsPub: "quickvalconspub",
      },
    },
    "regen-1": {
      rest: "https://lcd-regen.keplr.app",
      restSub: "https://rest.cosmos.directory/regen",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "regen",
        bech32PrefixAccPub: "regenpub",
        bech32PrefixValAddr: "regenvaloper",
        bech32PrefixValPub: "regenvaloperpub",
        bech32PrefixConsAddr: "regenvalcons",
        bech32PrefixConsPub: "regenvalconspub",
      },
    },
    "secret-4": {
      rest: "https://lcd-secret.keplr.app",
      restSub: "https://rest.cosmos.directory/secretnetwork", // 현재 지원 안됨
      bip44: {
        coinType: 529,
      },
      alternativeBIP44s: [
        {
          coinType: 118,
        },
      ],
      bech32Config: {
        bech32PrefixAccAddr: "secret",
        bech32PrefixAccPub: "secretpub",
        bech32PrefixValAddr: "secretvaloper",
        bech32PrefixValPub: "secretvaloperpub",
        bech32PrefixConsAddr: "secretvalcons",
        bech32PrefixConsPub: "secretvalconspub",
      },
    },
    "sentinelhub-2": {
      rest: "https://lcd-sentinel.keplr.app",
      restSub: "https://rest.cosmos.directory/sentinel",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "sent",
        bech32PrefixAccPub: "sentpub",
        bech32PrefixValAddr: "sentvaloper",
        bech32PrefixValPub: "sentvaloperpub",
        bech32PrefixConsAddr: "sentvalcons",
        bech32PrefixConsPub: "sentvalconspub",
      },
    },
    "shentu-2.2": {
      rest: "https://lcd-certik.keplr.app",
      restSub: "https://rest.cosmos.directory/shentu",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "certik",
        bech32PrefixAccPub: "certikpub",
        bech32PrefixValAddr: "certikvaloper",
        bech32PrefixValPub: "certikvaloperpub",
        bech32PrefixConsAddr: "certikvalcons",
        bech32PrefixConsPub: "certikvalconspub",
      },
    },
    "sifchain-1": {
      rest: "https://lcd-sifchain.keplr.app",
      restSub: "https://rest.cosmos.directory/sifchain",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "sif",
        bech32PrefixAccPub: "sifpub",
        bech32PrefixValAddr: "sifvaloper",
        bech32PrefixValPub: "sifvaloperpub",
        bech32PrefixConsAddr: "sifvalcons",
        bech32PrefixConsPub: "sifvalconspub",
      },
    },
    "sommelier-3": {
      rest: "https://lcd-sommelier.keplr.app",
      restSub: "https://rest.cosmos.directory/sommelier",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "somm",
        bech32PrefixAccPub: "sommpub",
        bech32PrefixValAddr: "sommvaloper",
        bech32PrefixValPub: "sommvaloperpub",
        bech32PrefixConsAddr: "sommvalcons",
        bech32PrefixConsPub: "sommvalconspub",
      },
    },
    "stargaze-1": {
      rest: "https://lcd-stargaze.keplr.app",
      restSub: "https://rest.cosmos.directory/stargaze",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "stars",
        bech32PrefixAccPub: "starspub",
        bech32PrefixValAddr: "starsvaloper",
        bech32PrefixValPub: "starsvaloperpub",
        bech32PrefixConsAddr: "starsvalcons",
        bech32PrefixConsPub: "starsvalconspub",
      },
    },
    "stride-1": {
      rest: "https://lcd-stride.keplr.app",
      restSub: "https://rest.cosmos.directory/stride",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "stride",
        bech32PrefixAccPub: "stridepub",
        bech32PrefixValAddr: "stridevaloper",
        bech32PrefixValPub: "stridevaloperpub",
        bech32PrefixConsAddr: "stridevalcons",
        bech32PrefixConsPub: "stridevalconspub",
      },
    },
    "umee-1": {
      rest: "https://lcd-umee.keplr.app",
      restSub: "https://rest.cosmos.directory/umee",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "umee",
        bech32PrefixAccPub: "umeepub",
        bech32PrefixValAddr: "umeevaloper",
        bech32PrefixValPub: "umeevaloperpub",
        bech32PrefixConsAddr: "umeevalcons",
        bech32PrefixConsPub: "umeevalconspub",
      },
    },
    "quasar-1": {
      rest: "https://lcd-quasar.keplr.app",
      restSub: "https://rest.cosmos.directory/quasar",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "quasar",
        bech32PrefixAccPub: "quasarpub",
        bech32PrefixValAddr: "quasarvaloper",
        bech32PrefixValPub: "quasarvaloperpub",
        bech32PrefixConsAddr: "quasarvalcons",
        bech32PrefixConsPub: "quasarvalconspub",
      },
    },
    "omniflixhub-1": {
      rest: "https://lcd-omniflixhub.keplr.app",
      restSub: "https://rest.cosmos.directory/omniflixhub",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "omniflix",
        bech32PrefixAccPub: "omniflixpub",
        bech32PrefixValAddr: "omniflixvaloper",
        bech32PrefixValPub: "omniflixvaloperpub",
        bech32PrefixConsAddr: "omniflixvalcons",
        bech32PrefixConsPub: "omniflixvalconspub",
      },
    },
    "kyve-1": {
      rest: "https://lcd-kyve.keplr.app",
      restSub: "https://rest.cosmos.directory/kyve",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "kyve",
        bech32PrefixAccPub: "kyvepub",
        bech32PrefixValAddr: "kyvevaloper",
        bech32PrefixValPub: "kyvevaloperpub",
        bech32PrefixConsAddr: "kyvevalcons",
        bech32PrefixConsPub: "kyvevalconspub",
      },
    },
    "noble-1": {
      rest: "https://lcd-noble.keplr.app",
      restSub: "https://rest.cosmos.directory/noble",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "noble",
        bech32PrefixAccPub: "noblepub",
        bech32PrefixValAddr: "noblevaloper",
        bech32PrefixValPub: "noblevaloperpub",
        bech32PrefixConsAddr: "noblevalcons",
        bech32PrefixConsPub: "noblevalconspub",
      },
    },
    "neutron-1": {
      rest: "https://lcd-neutron.keplr.app",
      restSub: "https://rest.cosmos.directory/neutron",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "neutron",
        bech32PrefixAccPub: "neutronpub",
        bech32PrefixValAddr: "neutronvaloper",
        bech32PrefixValPub: "neutronvaloperpub",
        bech32PrefixConsAddr: "neutronvalcons",
        bech32PrefixConsPub: "neutronvalconspub",
      },
    },
    gitopia: {
      rest: "https://lcd-gitopia.keplr.app",
      restSub: "https://rest.cosmos.directory/gitopia",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "gitopia",
        bech32PrefixAccPub: "gitopiapub",
        bech32PrefixValAddr: "gitopiavaloper",
        bech32PrefixValPub: "gitopiavaloperpub",
        bech32PrefixConsAddr: "gitopiavalcons",
        bech32PrefixConsPub: "gitopiavalconspub",
      },
    },
  }; 



console.log(Object.keys(chainIdInfos))