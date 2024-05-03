import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss'
})

/* interface Musics {
  titulo: string;
  nome: string,
  interprete: string,
  compositor: string,
  data: string,
  metafora: string,
  imagem: string,
  imagemDireita: boolean,
  cor: string,
  censurado: boolean
} */

export class PlaylistComponent {

  public pagina: number = 0;
  public titulo: string = '';
  constructor(
    private router: Router
  ) {
    if (this.router.url === '/playlist-censurada-portugal') {
      this.pagina = 1;

    } else if (this.router.url === '/playlist-nao-censurada-portugal') {
      this.pagina = 2;

    } else if (this.router.url === '/playlist-censurada-brasil') {
      this.pagina = 3;

    } else if (this.router.url === '/playlist-nao-censurada-brasil') {
      this.pagina = 4;

    }
  }
}
