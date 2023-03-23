const allRoles = {
  user: ['getProducts', 'manageProducts'],
  admin: ['getUsers', 'manageUsers', 'manageProducts', 'getProducts', 'AdminGetProducts'],
};

export const roles: string[] = Object.keys(allRoles);
export const roleRights: Map<string, string[]> = new Map(Object.entries(allRoles));
