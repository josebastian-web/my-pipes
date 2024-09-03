
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {
  // operador rest (...) sirve para agrupar en un array los elementos enviados
  /* transform(value: string, ...args: any[]): string { */
  transform(value: string, toUpper: boolean = false ): string {
    return ( toUpper ) ? value.toUpperCase()
      : value.toLowerCase()
  }

}
