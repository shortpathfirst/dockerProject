import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserService);
  const router = inject(Router);
 if(authService.currentUser.token) return true;

 router.navigate(['/login'],{queryParams:{returnUrl:state.url}}) //redirect the user
return false;
};
