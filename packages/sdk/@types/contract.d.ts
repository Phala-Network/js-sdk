type ContractMetaConstructorArg = {
  label: string;
  type: {
    displayName: string[];
    type: number;
  }
}

type ContractMetaConstructor = {
  args: ContractMetaConstructorArg[];
  docs: string[];
  label: string;
  payable: boolean;
  selector: string;
}

type ContractCallArgument = {
  label: string;
  type: {
    displayName: string[];
    type: number;
  };
}

type ContractMetaMessage = {
  args: ContractCallArgument[];
  docs: string[];
  label: string;
  mutates: boolean;
  payable: boolean;
  returnType: null | {
    displayName: string[];
    type: number;
  };
  selector: string;
}

type ContractMetaStorage = {
  struct: {
    fields: {
      layout: {
        cell: {
          key: string;
          ty: number;
        }
      }
      name: string;
    }[]
  }
}

type ContractMetaType = {
  id: number;
  type: {
    def: {
      primitive: boolean;
    }
  }
}

type ContractMetadata = {
  source: {
    hash: string;
    language: string;
    compiler: string;
    wasm?: string;
  },
  contract: {
    name: string;
    version: string;
    authors: string[];
  },
  V3: {
    spec: {
      constructors: ContractMetaConstructor[];
      docs: string[];
      events: unknown[];
      messages: ContractMetaMessage[];
    },
    storage: ContractMetaStorage,
    types: ContractMetaType[],
  }
}