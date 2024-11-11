export interface InterfaceZeldaAPICreatures {
  data: Creature[]
  message: string
  status: number
}

export interface Creature {
  category: string
  common_locations?: string[]
  description: string
  dlc: boolean
  drops?: string[]
  edible: boolean
  id: number
  image: string
  name: string
  cooking_effect?: string
  hearts_recovered?: number
}


export interface InterfaceZeldaAPIMaterials {
  data: Material[]
  message: string
  status: number
}

export interface Material {
  category: string
  common_locations: string[]
  cooking_effect: string
  description: string
  dlc: boolean
  hearts_recovered: number
  id: number
  image: string
  name: string
}

export interface InterfaceZeldaAPIEquipment {
  data: Equipment[]
  message: string
  status: number
}

export interface Equipment {
  category: string
  common_locations?: string[]
  description: string
  dlc: boolean
  id: number
  image: string
  name: string
  properties: Properties
}

export interface Properties {
  attack?: number
  defense?: number
}
