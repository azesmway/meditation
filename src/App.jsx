'use client'

import React from 'react'
import './App.css'

function App() {
  return (
    <>
      <header>
        <div class="header-bottom">

          <div class="levaya_storona">
            <a href="/" class="logotip">
              <div class="logotip_img">
                <img src="img/logotip2.png" alt="Логотип"/>
              </div>
            </a>

            <div class="header-menu">
              <a href="katalog_tovarov.php" style="text-decoration: none;">
                <div class="knopka_2">
                  <svg width="18" height="18" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.5 10.32C8.433 10.32 10 8.753 10 6.82001C10 4.88701 8.433 3.32001 6.5 3.32001C4.567 3.32001 3 4.88701 3 6.82001C3 8.753 4.567 10.32 6.5 10.32Z"
                      stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                      d="M17.5 10.32C19.433 10.32 21 8.753 21 6.82001C21 4.88701 19.433 3.32001 17.5 3.32001C15.567 3.32001 14 4.88701 14 6.82001C14 8.753 15.567 10.32 17.5 10.32Z"
                      stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                      d="M6.5 21.32C8.433 21.32 10 19.753 10 17.82C10 15.887 8.433 14.32 6.5 14.32C4.567 14.32 3 15.887 3 17.82C3 19.753 4.567 21.32 6.5 21.32Z"
                      stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                      d="M17.5 21.32C19.433 21.32 21 19.753 21 17.82C21 15.887 19.433 14.32 17.5 14.32C15.567 14.32 14 15.887 14 17.82C14 19.753 15.567 21.32 17.5 21.32Z"
                      stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Каталог</span>
                </div>
              </a>

              <a href="https://runa-odin.ru/digital_goods" class="knopka" style="text-decoration: none;">Цифровые
                товары</a>
              <a href="https://runa-odin.ru/meditations.php" class="knopka" style="text-decoration: none;">Медитации</a>
            </div>
          </div>

          <div class="pravaya_storona">

            <a href="https://runa-odin.ru/digital_goods" class="mobile-digital knopka" style="text-decoration: none;">Цифровые
              товары</a>

            <a href="https://runa-odin.ru/meditations.php" class="mobile-meditations knopka"
               style="text-decoration: none;">Медитации</a>

            <a href="/cart.php" class="mobile-cart cart_link" aria-label="Корзина">
              <div class="cart_btn">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="9" cy="20" r="1.6"></circle>
                  <circle cx="18" cy="20" r="1.6"></circle>
                  <path d="M2.5 3h2.4l2.1 10.2a1 1 0 0 0 1 .8h9.7a1 1 0 0 0 1-.7l1.7-6.8H6.1"></path>
                </svg>
                <div class="cart_count">0 ₽</div>
              </div>
            </a>

            <a href="katalog_tovarov.php" class="mobile-catalog" style="text-decoration: none;">
              <div class="knopka_2">
                <svg width="18" height="18" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.5 10.32C8.433 10.32 10 8.753 10 6.82001C10 4.88701 8.433 3.32001 6.5 3.32001C4.567 3.32001 3 4.88701 3 6.82001C3 8.753 4.567 10.32 6.5 10.32Z"
                    stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                    d="M17.5 10.32C19.433 10.32 21 8.753 21 6.82001C21 4.88701 19.433 3.32001 17.5 3.32001C15.567 3.32001 14 4.88701 14 6.82001C14 8.753 15.567 10.32 17.5 10.32Z"
                    stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                    d="M6.5 21.32C8.433 21.32 10 19.753 10 17.82C10 15.887 8.433 14.32 6.5 14.32C4.567 14.32 3 15.887 3 17.82C3 19.753 4.567 21.32 6.5 21.32Z"
                    stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                    d="M17.5 21.32C19.433 21.32 21 19.753 21 17.82C21 15.887 19.433 14.32 17.5 14.32C15.567 14.32 14 15.887 14 17.82C14 19.753 15.567 21.32 17.5 21.32Z"
                    stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Каталог</span>
              </div>
            </a>

            <div class="mobile-search search-container">
                <span class="search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="16"
                         height="16"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="#9cbcf3"
                         stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         class="icon-svg">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </span>

              <input type="text" id="searchInput" placeholder="Поиск"/>
              <div id="searchResults" class="search-results"></div>
              <div class="extraBlock"></div>
            </div>

            <a href="/order.php" class="mobile-order knopka" style="text-decoration: none;">Заказ</a>
          </div>
        </div>
      </header>

      <script>
        (async () => {
        await new Promise(r => (
          document.readyState === "loading"
            ? document.addEventListener("DOMContentLoaded", r, { once: true })
            : r()
        ));

        const searchDiv = document.querySelector(".search-container");
        const extra = document.querySelector(".extraBlock");

        if (!searchDiv || !extra) {
        console.warn("⚠️ Нет .search-container или .extraBlock");
        return;
      }

        const overlay = document.createElement("div");
        Object.assign(overlay.style, {
        position: "fixed",
        inset: "0",
        background: "rgba(0,0,0,.5)",
        zIndex: "999",
        pointerEvents: "auto",
        opacity: "0",
        transition: "opacity .2s ease",
        display: "none"
      });

        document.body.appendChild(overlay);

        const enable = () => {
        overlay.style.display = "block";
        requestAnimationFrame(() => {
        overlay.style.opacity = "1";
      });
        searchDiv.style.position = "relative";
        searchDiv.style.zIndex = "1000";
        extra.style.display = "flex";
      };

        const disable = () => {
        overlay.style.opacity = "0";
        setTimeout(() => {
        overlay.style.display = "none";
      }, 200);
        searchDiv.style.zIndex = "";
        extra.style.display = "none";
      };

        searchDiv.addEventListener("click", () => {
        const active = overlay.style.display === "block";
        active ? disable() : enable();
      });

        overlay.addEventListener("click", disable);

        extra.style.display = "none";
      })();

        (async () => {
        await new Promise(r => (
          document.readyState === "loading"
            ? document.addEventListener("DOMContentLoaded", r, {once: true})
            : r()
        ));

        const extra = document.querySelector('.extraBlock');
        const searchBox = document.querySelector('.search-container');
        const input = document.querySelector('#searchInput');

        if (!extra || !searchBox || !input) {
        console.error('Нет .extraBlock / .search-container / #searchInput');
        return;
      }

        extra.style.overflow = 'hidden';

        searchBox.addEventListener('click', () => {
        extra.classList.add('open');
      });

        let t = 0;
        const debounce = (fn, ms = 250) => (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), ms);
      };

        const trimToFit = () => {
        let guard = 5000;
        while (extra.scrollHeight > extra.clientHeight && extra.lastElementChild && guard-- > 0) {
        extra.removeChild(extra.lastElementChild);
      }
      };

        const render = (items = []) => {
        extra.innerHTML = '';

        if (!Array.isArray(items) || !items.length) return;

        const frag = document.createDocumentFragment();

        for (const it of items) {
        const alias = (it.alias || '').toString().trim();
        const href = alias ? '/' + encodeURIComponent(alias) : '#';

        const wrap = document.createElement('a');
        wrap.className = 'block_tov link_tov';
        wrap.href = href;
        wrap.innerHTML = `
                <div class="iz_tov">
                    <img src="/img/${it.image || ''}" alt="">
                </div>
                <div class="ob_tov">
                    <div class="op_tov">${it.title || ''}</div>
                    <div class="pr_tov">${(it.price ?? '').toString()}₽</div>
                </div>
            `;
        frag.appendChild(wrap);
      }

        extra.appendChild(frag);

        trimToFit();
        setTimeout(trimToFit, 50);
        setTimeout(trimToFit, 200);

        extra.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', trimToFit, {once: true});
      });
      };

        const fetchList = async (body) => {
        try {
        const res = await fetch('php/extraBlock.php', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
        body
      });

        if (!res.ok) return [];

        const text = await res.text();

        try {
        return JSON.parse(text);
      } catch {
        console.error('Не JSON:', text.slice(0, 300));
        return [];
      }
      } catch (e) {
        console.error('Fetch error:', e);
        return [];
      }
      };

        const loadDefault = async () => {
        render(await fetchList('default=1'));
      };

        const search = async (q) => {
        const s = (q || '').trim();
        if (!s) return loadDefault();
        render(await fetchList('q=' + encodeURIComponent(s)));
      };

        input.addEventListener('input', debounce(e => {
        search(e.target.value);
      }, 250));

        await loadDefault();
      })();

      </script>

      <div class="textwarranty meditac">Медитации</div>

      <div class="page_wrap">
        <div class="sub_title">(медитации к книге Олега Шапошникова “Книга Великой Богини”)</div>

        <div class="litres_grid">

          <div class="card cover_box kniga">
            <img src="img/kniga_velikoi_bogini.jpg" alt="Фото книги"/>
          </div>

          <div class="center_col">

            <div class="card links_card">
              <div class="mini_links">

                <details class="adet">
                  <summary class="clean_link asummary">О книге</summary>

                  <div class="abox">
                    <div class="aprev">
                      Эта книга есть книга-пробуждение, пробуждение женщины под патронажем Великой Богини.
                      Наш мир является несовершенным, является не только миром нарушенной гармонии, но и миром,
                      смысл и суть существования которого утеряны...
                    </div>

                    <details class="amore_box">
                      <summary class="amore">Читать далее</summary>

                      <div class="afull">
                        <p> Спасти мир и спасти человечество может только прекращение эпохи патриархата,
                          возвращение к изначальной схеме взаимодействия женской и мужской
                          энергетических структур, и гармоничного взаимодействия женской и мужской Силы. Это позволит
                          преобразить мир, сделав его гармоничным, развивающимся, причем эволюционно развивающимся, и
                          свободным от нынешних системных проблем, убережет мир от краха, а человечество – от
                          уничтожения.
                          И в этом и состоит наша первейшая задача.
                        </p>

                        <p>
                          И выполнение этой задачи раскладывается на множество (колоссальное множество) женских
                          пробуждений
                          и возвращения каждой женщины к ее изначальному состоянию и к пробуждению в каждой женщине ее
                          женской Силы. Данная книга не только рассказывает обо всем этом, но и дает реальные методики
                          для осознания женщиной своего женского начала, для понимания и осознания своей женской Силы
                          и принятия этой Силы, а также методики применения этой Силы.
                        </p>

                        <p>
                          Женщина формирует цикличность, возникающую из ее месячных и любая цикличность будет
                          соизмеряться
                          (коррелироваться, синхронизироваться) с цикличностью месячных. И как было сказано выше, эта
                          цикличность – это и есть рунический цикл. В данной книге Вы найдете подробное описание
                          рунического
                          цикла на основе Рунического Круга, а также описание принципов и методов и оперирования в
                          руническом цикле.
                        </p>

                        <p>
                          В данной книге также описана и женская магия на основе Сейда. В древнескандинавском языке
                          Seiðr
                          (Сейд) - это форма магии, связанная, как с предсказанием будущего, так и с формированием
                          будущего.
                          Техника Сейда – это особый вид транса, в который входили скандинавские ведьмы. Они отделяли
                          свои
                          тонкие тела от физического тела, вследствие чего могли путешествовать в разные места,
                          вселялась
                          в тела животных и птиц, а также и в тела людей.
                        </p>

                        <p>
                          В первую очередь техники Сейда - это исключительно женские техники (причем очень и очень
                          древние),
                          почему мы и говорим о них в данной книге. Именно в этих техниках женщина максимально
                          раскрывает
                          свое женское Начало и все свои свойства и качества, выражающие ее, как истинную Женщину.
                          Именно
                          через эти техники женское Начало проявляется в женщине в максимальной степени. Но что такое
                          эти
                          техники? А это не что иное, как техники пси-реальности, которые и описываются в данной книге.
                        </p>

                        <p><strong>Скачать книгу можно по ссылкам:</strong></p>

                        <div class="adownloads">
                          <a href="https://runa-odin.org/oleg_shaposhnikov_book_of_the_great_goddess.pdf"
                             target="_blank"
                             class="alink">Скачать PDF</a>
                          <a href="https://disk.yandex.ru/i/Rv8crtYeDG5JCA" target="_blank" class="alink">Яндекс
                            Диск</a>
                          <a href="https://drive.google.com/file/d/1l0WLPd50c3Xvqom2ugbKcVxO3waSs5ba/view?usp=sharing"
                             target="_blank" class="alink">Google Диск</a>
                        </div>
                      </div>
                    </details>
                  </div>
                </details>

                <a class="clean_link">Инструкция по медитациям</a>

              </div>
            </div>


            <div class="card">

              <div class="list_group">
                <div class="section_title">Часть 1</div>

                <div class="row_item">
                  <div class="row_name">Медитация №1. Процесс осознания</div>
                  <button class="btn_buy" data-id="m1">В корзину</button>
                  <div class="price">1 299 ₽</div>
                </div>

                <div class="row_item">
                  <div class="row_name">Медитация №2. Процесс принятия</div>
                  <button class="btn_buy" data-id="m2">В корзину</button>
                  <div class="price">1 299 ₽</div>
                </div>

                <div class="row_item">
                  <div class="row_name">Медитация №3. Таинство</div>
                  <button class="btn_buy" data-id="m3">В корзину</button>
                  <div class="price">1 299 ₽</div>
                </div>
              </div>

              <div class="list_group">
                <div class="section_title">Часть 2</div>

                <div class="row_item">
                  <div class="row_name">Медитация №4. Трансляция энергии женской Силы</div>
                  <button class="btn_buy" data-id="m4">В корзину</button>
                  <div class="price">1 299 ₽</div>
                </div>

                <div class="row_item">
                  <div class="row_name">Медитация №5. Трансформация полученной энергии</div>
                  <button class="btn_buy" data-id="m5">В корзину</button>
                  <div class="price">1 299 ₽</div>
                </div>

                <div class="row_item">
                  <div class="row_name">Медитация №6. Мощное поглощение энергии</div>
                  <button class="btn_buy" data-id="m6">В корзину</button>
                  <div class="price">1 299 ₽</div>
                </div>

                <div class="row_item">
                  <div class="row_name">Медитация №7. Энергетическая подпитка и система безопасности</div>
                  <button class="btn_buy" data-id="m7">В корзину</button>
                  <div class="price">1 299 ₽</div>
                </div>

                <div class="row_item">
                  <div class="row_name">Медитация №8. Энергетическая чистка</div>
                  <button class="btn_buy" data-id="m8">В корзину</button>
                  <div class="price">1 299 ₽</div>
                </div>
              </div>

              <div class="list_group">
                <div class="section_title">Часть 3</div>

                <div class="row_item">
                  <div class="row_name">Медитация №9. Осознание цикличности</div>
                  <button class="btn_buy" data-id="m9">В корзину</button>
                  <div class="price">1 299 ₽</div>
                </div>

                <div class="row_item">
                  <div class="row_name">Медитация №10. Формирование цикличности</div>
                  <button class="btn_buy" data-id="m10">В корзину</button>
                  <div class="price">1 299 ₽</div>
                </div>
              </div>

              <div class="list_group">
                <div class="section_title">Часть 4</div>

                <div class="row_item">
                  <div class="row_name">Медитация №11. Собственный мир</div>
                  <button class="btn_buy" data-id="m11">В корзину</button>
                  <div class="price">1 299 ₽</div>
                </div>

                <div class="row_item">
                  <div class="row_name">Медитация №12. Эго и личность</div>
                  <button class="btn_buy" data-id="m12">В корзину</button>
                  <div class="price">1 299 ₽</div>
                </div>

                <div class="row_item">
                  <div class="row_name">Медитация №13. Борьба с демонами прошлого</div>
                  <button class="btn_buy" data-id="m13">В корзину</button>
                  <div class="price">1 299 ₽</div>
                </div>

                <div class="row_item">
                  <div class="row_name">Медитация №14. Создание ключей</div>
                  <button class="btn_buy" data-id="m14">В корзину</button>
                  <div class="price">1 299 ₽</div>
                </div>

                <div class="row_item">
                  <div class="row_name">Медитация №15. Хранитель и гости</div>
                  <button class="btn_buy" data-id="m15">В корзину</button>
                  <div class="price">1 299 ₽</div>
                </div>

                <div class="row_item">
                  <div class="row_name">Медитация №16. Все три «Я»</div>
                  <button class="btn_buy" data-id="m16">В корзину</button>
                  <div class="price">1 299 ₽</div>
                </div>

                <div class="row_item">
                  <div class="row_name">Медитация №17. Пси-реальность в пси-реальности</div>
                  <button class="btn_buy" data-id="m17">В корзину</button>
                  <div class="price">1 299 ₽</div>
                </div>
              </div>

              <div class="list_group">
                <div class="section_title">Часть 5</div>
              </div>

            </div>


          </div>
        </div>


      </div>

      <footer class="footer">

        <div class="footer-container">

          <div class="buttons-container">
            <div class="contacts">Логотип</div>
            <button class="knopochka">Руны Одина - ювелирные украшения из титана и нержавеющей стали</button>
          </div>

          <div class="buttons-container">
            <div class="contacts">Навигация</div>
            <a href="https://runa-odin.ru/main" class="knopochka">Главная</a>
            <a href="https://runa-odin.ru/katalog_tovarov" class="knopochka">Каталог</a>
            <a href="https://runa-odin.ru/materials" class="knopochka">Материалы</a>
            <button class="knopochka">Вопросы и ответы</button>
          </div>

          <div class="buttons-container">
            <div class="contacts">Информация</div>
            <a href="https://mayaruna.ru/dostavka-i-oplata.php" class="knopochka">Доставка и оплата</a>
            <a href="https://mayaruna.ru/obmen-i-vozvrat.php" class="knopochka">Обмен и возврат</a>
            <a href="https://mayaruna.ru/warranty.php" class="knopochka">Гарантии и качество</a>
            <a href="https://mayaruna.ru/privacy-policy.php" class="knopochka">Политика конфиденциальности</a>
            <a href="https://mayaruna.ru/oferta.php" class="knopochka">Публичная оферта</a>
          </div>

          <div class="buttons-container">
            <div class="contacts">Контакты</div>
            <b><a href="mailto:naunik@list.ru" class="mail-link knopochka">Naunik@list.ru</a></b>
          </div>

        </div>

      </footer>
    </>
  )
}

export default App
