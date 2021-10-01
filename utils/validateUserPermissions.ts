type User = {
  permissions: string[];
  roles: string[];
};

type ValidateUserPermissionsParams = {
  user: User | undefined;
  permissions: string[] | undefined;
  roles: string[] | undefined;
};

export function validateUserPermissions({
  user,
  permissions,
  roles,
}: ValidateUserPermissionsParams) {
  if (permissions && permissions.length > 0) {
    const hasAllPermisions = permissions.every((permission) => {
      return user?.permissions.includes(permission);
    });

    if (!hasAllPermisions) {
      return false;
    }
  }

  if (roles && roles.length > 0) {
    const hasAllRoles = roles.every((role) => {
      return user?.roles.includes(role);
    });

    if (!hasAllRoles) {
      return false;
    }
  }

  return true;
}
