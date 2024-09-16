const faqList = document.querySelectorAll('.faqList li');

document.addEventListener('DOMContentLoaded', () => {
  console.log({ faqList });
  faqList.forEach((item) => {
    item.addEventListener('click', (e) => {
      console.log('item.id', item.id);
      faqList.forEach((subItem) => {
        const pElement = subItem.querySelector('p');

        if (subItem.id === item.id) {
          pElement.style.height = 'auto';
          pElement.style.opacity = 1;
          subItem.querySelector('.plus').style.display = 'none';
          subItem.querySelector('.minus').style.display = 'block';
        } else {
          pElement.style.height = 0;
          pElement.style.opacity = 0;
          subItem.querySelector('.plus').style.display = 'block';
          subItem.querySelector('.minus').style.display = 'none';
        }
      });
    });
  });
});
