import { CanActivate } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

/**
 * Requires authentication on non-public resources.
 *
 * @param isUserResource Whether the resource is public or user restricted.
 */
export function ResourceGuard(isUserResource: boolean) {
  if (isUserResource) return AuthGuard();

  return PublicResourceGuard;
}

class PublicResourceGuard implements CanActivate {
  canActivate() {
    return true;
  }
}
