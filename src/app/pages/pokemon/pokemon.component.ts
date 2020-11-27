import {Component, OnInit, ViewChild} from '@angular/core';
import {ServiceService} from '../../services/service.service';
import {Pokemon} from '../../models/pokemon';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  pokemons: MatTableDataSource<Pokemon>;
  pokemon: Pokemon;
  displayedColumns: string[] = ['name', 'url', 'select'];
  resultsLength: number;

  constructor(private service: ServiceService) {
    this.pokemon = {
      sprites:
        {
          other:
            {
              dream_world:
                {front_default: ''}
            }
        }
    };
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.service.getPokemons().subscribe(response => {
      this.pokemons = new MatTableDataSource<Pokemon>(response);
      this.pokemons.paginator = this.paginator;
    });
  }

  getPokemon(name): void {
    this.service.getPokemon(name).subscribe(response => {
      this.pokemon = response;
    });
  }
}
