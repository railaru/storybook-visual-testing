export default {
  title: "Components"
};

export const matCard = () => {
  const card = document.createElement("div");    
  card.innerHTML = `
    <a href='#' class="card">
      <div class='card__img' style="background-image: url(&quot;https://lh3.googleusercontent.com/PRotPPURtGlMjzxd8Irny87OqVJUjfhzgve-xPsmnzpwzf9uC1wtsQ5_DeVg5n1P-AOKb7Coj79N0abcYKn5WVvu3najPsRxV5szk0c&quot;);">
      </div>
      <div class="card__content">
        <div class="card__type">
          Course
        </div>
        <div class="card__title">
          Introduction to Machine Learning Problem Framing
        </div>
        <div class="card__description">
          This one-hour course introduces the machine learning mindset and helps you identify appropriate situations for machine learning.
        </div>
      </div>      
    </a>
    `;
  return card;
};
