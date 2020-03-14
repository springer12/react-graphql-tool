export type AddressType = {
  unit: string,
  streetNumber: string,
  streetName: string,
  city: string,
  province: string,
  postalCode: string,
  country: string,
}

export type RoleType = {
  id: string,
  name: string,
}

export type BrokerageType = {
  id: string,
  brokerageName: string,
  address: AddressType,
  phone: string,
  fax: string,
}

type UserRole = {
  id: string,
  roleType: string,
  createdAt: string,
  brokerage: BrokerageType,
  role: RoleType,
}

type UserRoleConnection = {
  pageCount: number,
  list: Array<UserRole>,
}

export type UserType = {
  id: string,
  email: string,
  firstName: string,
  lastName: string,
  phone: string,
  userRoles: UserRoleConnection,
  brokerageInvitation: string,
  brokerages: Array<BrokerageType>,
  loggedInAt: string,
  passwordChangedAt: string,
  oreaVerified: boolean,
}
