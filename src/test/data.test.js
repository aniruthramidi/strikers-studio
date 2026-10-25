import { describe, it, expect } from 'vitest';
import { projects } from '../data/projects';
import { services } from '../data/services';

describe('Studio Data Modules', () => {
  it('contains valid and complete project items', () => {
    expect(projects.length).toBeGreaterThanOrEqual(4);

    projects.forEach((project) => {
      expect(project.id).toBeDefined();
      expect(typeof project.id).toBe('string');
      expect(project.title).toBeTruthy();
      expect(project.deliverables).toBeInstanceOf(Array);
      expect(project.deliverables.length).toBeGreaterThan(0);
      expect(project.image).toMatch(/^\//);
    });
  });

  it('contains valid and complete service items', () => {
    expect(services.length).toBe(4);

    services.forEach((service) => {
      expect(service.num).toMatch(/^\d{3}$/);
      expect(service.title).toBeTruthy();
      expect(service.desc).toBeTruthy();
      expect(service.image).toMatch(/^\//);
    });
  });
});
