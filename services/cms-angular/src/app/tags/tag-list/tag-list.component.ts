import { Component, OnInit } from '@angular/core';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {
  tags: any[] = [];

  constructor(private tagService: TagService) {}

  ngOnInit(): void {
    this.fetchTags();
  }

  fetchTags(): void {
    this.tagService.getTags().subscribe((data) => {
      this.tags = data;
    });
  }

  deleteTag(id: string): void {
    this.tagService.deleteTag(id).subscribe(() => {
      this.tags = this.tags.filter(tag => tag.id !== id);
    });
  }
}
