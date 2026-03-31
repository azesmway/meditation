import { useEffect, useRef, useState, useCallback } from 'react'
import './App.css'

const CatalogIcon = () => (
  <svg width="18" height="18" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 10.32C8.433 10.32 10 8.753 10 6.82001C10 4.88701 8.433 3.32001 6.5 3.32001C4.567 3.32001 3 4.88701 3 6.82001C3 8.753 4.567 10.32 6.5 10.32Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 10.32C19.433 10.32 21 8.753 21 6.82001C21 4.88701 19.433 3.32001 17.5 3.32001C15.567 3.32001 14 4.88701 14 6.82001C14 8.753 15.567 10.32 17.5 10.32Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.5 21.32C8.433 21.32 10 19.753 10 17.82C10 15.887 8.433 14.32 6.5 14.32C4.567 14.32 3 15.887 3 17.82C3 19.753 4.567 21.32 6.5 21.32Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 21.32C19.433 21.32 21 19.753 21 17.82C21 15.887 19.433 14.32 17.5 14.32C15.567 14.32 14 15.887 14 17.82C14 19.753 15.567 21.32 17.5 21.32Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="20" r="1.6"></circle>
    <circle cx="18" cy="20" r="1.6"></circle>
    <path d="M2.5 3h2.4l2.1 10.2a1 1 0 0 0 1 .8h9.7a1 1 0 0 0 1-.7l1.7-6.8H6.1"></path>
  </svg>
)

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="#9cbcf3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
)

// Отправка кода на сервер — возвращает ссылку на скачивание
async function sendCode(meditationId, code) {
  // TODO: реализовать реальный запрос
  const res = await fetch('/api/get-download-link', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: meditationId, code }),
  })
  const data = await res.json()
  return data.url  // ожидаем строку-ссылку
  // return null
}

function Modal({ meditation, onClose }) {
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const overlayRef = useRef(null)

  const handleOverlayClick = useCallback((e) => {
    if (e.target === overlayRef.current) onClose()
  }, [onClose])

  const handleSubmit = async () => {
    if (!code.trim()) {
      setError('Введите код')
      return
    }
    setError('')
    setLoading(true)
    try {
      const url = await sendCode(meditation.id, code.trim())
      if (url) {
        const a = document.createElement('a')
        a.href = url
        a.download = ''
        document.body.appendChild(a)
        a.click()
        a.remove()
        onClose()
      } else {
        setError('Неверный код или сервер недоступен')
      }
    } catch {
      setError('Ошибка при отправке. Попробуйте ещё раз.')
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit()
    if (e.key === 'Escape') onClose()
  }

  return (
    <div className="modal-overlay" ref={overlayRef} onClick={handleOverlayClick}>
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Закрыть">×</button>
        <div className="modal-title">Введите код доступа</div>
        <div className="modal-subtitle">{meditation.name}</div>
        <input
          className="modal-input"
          type="text"
          placeholder="Код доступа"
          value={code}
          onChange={e => setCode(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <div className="modal-error">{error}</div>
        <button className="modal-btn" onClick={handleSubmit} disabled={loading}>
          {loading && <span className="modal-spinner"></span>}
          {loading ? 'Проверка...' : 'Отправить код'}
        </button>
      </div>
    </div>
  )
}

function App() {
  const searchDivRef = useRef(null)
  const extraRef = useRef(null)
  const [modal, setModal] = useState(null) // { id, name }

  const openModal = (id, name) => setModal({ id, name })
  const closeModal = () => setModal(null)

  // Overlay + search panel toggle
  useEffect(() => {
    const searchDiv = searchDivRef.current
    const extra = extraRef.current
    if (!searchDiv || !extra) return

    const overlay = document.createElement('div')
    Object.assign(overlay.style, {
      position: 'fixed',
      inset: '0',
      background: 'rgba(0,0,0,.5)',
      zIndex: '999',
      pointerEvents: 'auto',
      opacity: '0',
      transition: 'opacity .2s ease',
      display: 'none',
    })
    document.body.appendChild(overlay)

    extra.style.display = 'none'

    const enable = () => {
      overlay.style.display = 'block'
      requestAnimationFrame(() => { overlay.style.opacity = '1' })
      searchDiv.style.position = 'relative'
      searchDiv.style.zIndex = '1000'
      extra.style.display = 'flex'
    }

    const disable = () => {
      overlay.style.opacity = '0'
      setTimeout(() => { overlay.style.display = 'none' }, 200)
      searchDiv.style.zIndex = ''
      extra.style.display = 'none'
    }

    const handleSearchClick = () => {
      overlay.style.display === 'block' ? disable() : enable()
    }

    searchDiv.addEventListener('click', handleSearchClick)
    overlay.addEventListener('click', disable)

    return () => {
      searchDiv.removeEventListener('click', handleSearchClick)
      overlay.removeEventListener('click', disable)
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay)
    }
  }, [])

  return (
    <>
      {modal && <Modal meditation={modal} onClose={closeModal} />}
      <header>
        <a href="/" className="logotip">
          <div className="logotip_img">
            <img src="img/logotip2.png" alt="Логотип" />
          </div>
        </a>
        <div className="levaya_storona">
          <div className="header-menu">
            <a href="/" style={{ textDecoration: 'none' }}>
              <div className="knopka_2">
                <CatalogIcon />
                <span>Каталог</span>
              </div>
            </a>
            <a href="/" className="knopka" style={{ textDecoration: 'none' }}>Инструкция</a>
            <a href="/" className="knopka" style={{ textDecoration: 'none' }}>Медитации</a>
          </div>
        </div>
      </header>

      <div className="textwarranty meditac">Медитации</div>

      <div className="page_wrap">
        <div className="sub_title">(медитации к книге Олега Шапошникова &quot;Книга Великой Богини&quot;)</div>

        <div className="litres_grid">

          <div className="card cover_box kniga">
            <img src="img/kniga_velikoi_bogini.jpg" alt="Фото книги" />
          </div>

          <div className="center_col">

            <div className="card links_card">
                <div className="abox">
                  <div className="aprev">
                    По данной книге созданы медитации...
                  </div>
                  <details className="amore_box">
                    <summary className="amore">Читать далее</summary>

                    <div className="afull">
                      <p>Спасти мир и спасти человечество может только прекращение эпохи патриархата,
                        возвращение к изначальной схеме взаимодействия женской и мужской
                        энергетических структур, и гармоничного взаимодействия женской и мужской Силы.
                      </p>
                      <p>И выполнение этой задачи раскладывается на множество женских пробуждений
                        и возвращения каждой женщины к ее изначальному состоянию.
                      </p>
                      <p>Женщина формирует цикличность, возникающую из ее месячных и любая цикличность будет
                        соизмеряться с цикличностью месячных. В данной книге Вы найдете подробное описание
                        рунического цикла на основе Рунического Круга.
                      </p>
                      <p>В данной книге также описана женская магия на основе Сейда. В древнескандинавском языке
                        Seiðr (Сейд) — это форма магии, связанная с предсказанием и формированием будущего.
                      </p>
                      <p><strong>Скачать книгу можно по ссылкам:</strong></p>
                    </div>

                    <div className="adownloads">
                      <a href="https://runa-odin.org/oleg_shaposhnikov_book_of_the_great_goddess.pdf" target="_blank" rel="noreferrer" className="alink">Скачать PDF</a>
                      <a href="https://disk.yandex.ru/i/Rv8crtYeDG5JCA" target="_blank" rel="noreferrer" className="alink">Яндекс Диск</a>
                      <a href="https://drive.google.com/file/d/1l0WLPd50c3Xvqom2ugbKcVxO3waSs5ba/view?usp=sharing" target="_blank" rel="noreferrer" className="alink">Google Диск</a>
                    </div>
                  </details>
                </div>
            </div>

            <div className="card">

              <div className="list_group">
                <div className="section_title">Файлы для скачивания</div>
                <div className="row_item">
                  <div className="row_name">Медитация №1. Процесс осознания</div>
                  <button className="btn_buy" onClick={() => openModal('m1', 'Медитация №1. Процесс осознания')}>Скачать</button>
                </div>
                <div className="row_item">
                  <div className="row_name">Медитация №2. Процесс принятия</div>
                  <button className="btn_buy" onClick={() => openModal('m2', 'Медитация №2. Процесс принятия')}>Скачать</button>
                </div>
                <div className="row_item">
                  <div className="row_name">Медитация №3. Таинство</div>
                  <button className="btn_buy" onClick={() => openModal('m3', 'Медитация №3. Таинство')}>Скачать</button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
