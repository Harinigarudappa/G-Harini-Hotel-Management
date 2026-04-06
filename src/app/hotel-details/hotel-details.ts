import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotel-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-details.html',
  styleUrl: './hotel-details.css'
})
export class HotelDetailsComponent {

  hotelName = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.hotelName = this.route.snapshot.paramMap.get('name') || '';
  }

  rooms = [
    {
      type: 'Deluxe Room',
      tag: 'Deluxe',
      price: 2000,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    },
    {
      type: 'Standard Room',
      tag: 'Standard',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa'
    },
    {
      type: 'Suite Room',
      tag: 'Suite',
      price: 3000,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b'
    }
  ];
}