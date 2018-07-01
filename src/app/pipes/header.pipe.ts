import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'getHeader'})
export class HeaderPipe implements PipeTransform {
    transform(value: any): any {
        console.log(value);
        if (value === 'SUPERADMIN_ROLE') {
            console.log('iapho');
            return 'superadm';
        } else if (value === 'ADMIN_ROLE') {
            return 'adm';
        }
            return 'user';
    }
}
