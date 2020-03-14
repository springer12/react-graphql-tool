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
  name: string,
  address: AddressType,
  phone: string,
  fax: string,
}

export type UserType = {
  id: string,
  email: string,
  firstName: string,
  lastName: string,
  phone: string,
  createdAt: string,
  updatedAt: string,
  roles: Array<RoleType>,
  brokerageInvitation: string,
  brokerages: Array<BrokerageType>,
  invitedAt: string,
  invitedBy: string,
  suspended: boolean,
  loggedInAt: string,
  passwordChangedAt: string,
  oreaVerified: boolean,
}
