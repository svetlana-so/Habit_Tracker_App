export function renderCategoryIcon(category) {
  if (category === 'Health and Fitness') {
    return '<i class="fa-solid fa-dumbbell" style="color: #878282;"></i>';
  }
  if (category === 'Productivity') {
    return '<i class="fa-solid fa-check-double" style="color: #878282;"></i>';
  }
  if (category === 'Personal Development') {
    return '<i class="fa-solid fa-person" style="color: #878282;"></i>';
  }
  if (category === 'Financial') {
    return '<i class="fa-solid fa-coins" style="color: #878282;"></i>';
  }
  if (category === 'Relationships') {
    return '<i class="fa-solid fa-heart" style="color: #878282;"></i>';
  }
  if (category === 'Creativity') {
    return '<i class="fa-solid fa-palette" style="color: #878282;"></i>';
  }
  if (category === 'Organization') {
    return '<i class="fa-solid fa-sitemap" style="color: #878282;"></i>';
  }
  if (category === 'Hobbies') {
    return '<i class="fa-solid fa-dice-three" style="color: #878282;"></i>';
  }
  if (category === 'Education') {
    return '<i class="fa-solid fa-book" style="color: #878282;"></i>';
  }
  if (category === 'Mindset') {
    return '<i class="fa-solid fa-brain" style="color: #878282;"></i>';
  }
  if (category === 'Other') {
    return '<i class="fa-solid fa-bars-progress" style="color: #878282;"></i>';
  }
  return '';
}
