import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'getRole'})
export class RolePipe implements PipeTransform {
    transform(value: string, tipo: string): any {
        if (tipo === 'roleClass') {
            if (value === 'SUPERADMIN_ROLE') {
                return 'danger';
            }
            if (value === 'ADMIN_ROLE') {
                return 'info';
            }
            if (value === 'PREMIUM_ROLE') {
                return 'warning';
            }
            if (value === 'USER_ROLE') {
                return 'success';
            }
        }
        if (tipo === 'roleName') {
            if (value === 'SUPERADMIN_ROLE') {
                return 'DESARROLLADOR';
            }
            if (value === 'ADMIN_ROLE') {
                return 'ADMINISTRADOR';
            }
            if (value === 'PREMIUM_ROLE') {
                return 'PREMIUM';
            }
            if (value === 'USER_ROLE') {
                return 'USUARIO';
            }
        }
    }
}
