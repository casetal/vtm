import { useEffect, useState } from "react";
import ArrowIcon from "./ArrowIcon";
import Input from "./Input";

const App = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleClickTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === "tab1" ? "selected" : ""}`}
          onClick={() => handleClickTab("tab1")}
        >
          <div className="title">Заголовок таба 1</div>
          <p>
            Равным образом, высококачественный прототип будущего проекта
            способствует повышению качества анализа существующих паттернов
          </p>
          <ArrowIcon
            color={activeTab === "tab1" ? "#0078ee" : "#fff"}
            background={activeTab === "tab1" ? "#fff" : "#0078ee"}
          />
        </div>

        <div
          className={`tab ${activeTab === "tab2" ? "selected" : ""}`}
          onClick={() => handleClickTab("tab2")}
        >
          <div className="title">Заголовок таба 2</div>
          <p>
            Равным образом, высококачественный прототип будущего проекта
            способствует повышению качества анализа существующих паттернов
          </p>
          <ArrowIcon
            color={activeTab === "tab2" ? "#0078ee" : "#fff"}
            background={activeTab === "tab2" ? "#fff" : "#0078ee"}
          />
        </div>

        <div
          className={`tab ${activeTab === "tab3" ? "selected" : ""}`}
          onClick={() => handleClickTab("tab3")}
        >
          <div className="title">Заголовок таба 3</div>
          <p>
            Равным образом, высококачественный прототип будущего проекта
            способствует повышению качества анализа существующих паттернов
          </p>
          <ArrowIcon
            color={activeTab === "tab3" ? "#0078ee" : "#fff"}
            background={activeTab === "tab3" ? "#fff" : "#0078ee"}
          />
        </div>
      </div>

      {activeTab == "tab1" ? (
        <div className="content">
          <div className="text">
            <h2>Заголовок таба 1</h2>
            <p>
              Безусловно, начало повседневной работы по формированию позиции
              способствует подготовке и реализации модели развития.{" "}
            </p>
            <ul>
              <li>Элемент ненумерованного списка</li>
              <li>Элемент ненумерованного списка</li>
            </ul>
            <p>
              Идейные соображения высшего порядка, а также постоянное
              информационно-пропагандистское обеспечение нашей деятельности
              выявляет срочную потребность приоретизации разума над эмоциями.{" "}
            </p>

            <ol>
              <li>Элемент нумерованного списка</li>
              <li>Элемент нумерованного списка</li>
            </ol>
            <p>
              Каждый из нас понимает очевидную вещь: выбранный нами
              инновационный путь в значительной степени обусловливает важность{" "}
            </p>
            <p>
              Безусловно, начало повседневной работы по формированию позиции
              способствует подготовке и реализации модели развития.{" "}
            </p>
            <ul>
              <li>Элемент ненумерованного списка</li>
              <li>Элемент ненумерованного списка</li>
            </ul>
            <p>
              Идейные соображения высшего порядка, а также постоянное
              информационно-пропагандистское обеспечение нашей деятельности
              выявляет срочную потребность приоретизации разума над эмоциями.{" "}
            </p>

            <ol>
              <li>Элемент нумерованного списка</li>
              <li>Элемент нумерованного списка</li>
            </ol>
            <p>
              Каждый из нас понимает очевидную вещь: выбранный нами
              инновационный путь в значительной степени обусловливает важность{" "}
            </p>
          </div>
        </div>
      ) : null}
      {activeTab == "tab2" ? (
        <div className="content">
          <h2>Заголовок таба 2</h2>
          <Input placeholder="Ваше имя" />
          <Input placeholder="Ваша фамилия" />
          <Input placeholder="Ваше отчество" />
        </div>
      ) : null}
      {activeTab == "tab3" ? (
        <div className="content">
          <div className="text">
          <h2>Заголовок таба 3</h2>
          <p>
            Прежде всего, реализация намеченных плановых заданий предопределяет
            высокую востребованность как самодостаточных, так и внешне зависимых
            концептуальных решений. Являясь всего лишь частью общей картины,
            диаграммы связей, вне зависимости от их уровня, должны быть описаны
            максимально подробно. Лишь явные признаки победы институционализации
            неоднозначны и будут объявлены нарушающими общечеловеческие нормы
            этики и морали. Повседневная практика показывает, что консультация с
            широким активом позволяет выполнить важные задания по разработке
            экспериментов, поражающих по своей масштабности и грандиозности!
            Учитывая ключевые сценарии поведения, постоянное
            информационно-пропагандистское обеспечение нашей деятельности
            требует анализа новых принципов формирования материально-технической
            и кадровой базы. Следует отметить, что укрепление и развитие
            внутренней структуры играет важную роль в формировании прогресса
            профессионального сообщества. Не следует, однако, забывать, что
            постоянный количественный рост и сфера нашей активности
            предоставляет широкие возможности для соответствующих условий
            активизации. Господа, реализация намеченных плановых заданий
            прекрасно подходит для реализации прогресса профессионального
            сообщества. И нет сомнений, что акционеры крупнейших компаний
            рассмотрены исключительно в разрезе маркетинговых и финансовых
            предпосылок. Учитывая ключевые сценарии поведения,
            социально-экономическое развитие в значительной степени
            обусловливает важность новых предложений. Внезапно, явные признаки
            победы институционализации набирают популярность среди определенных
            слоев населения, а значит, должны быть призваны к ответу.
            Разнообразный и богатый опыт говорит нам, что семантический разбор
            внешних противодействий требует от нас анализа своевременного
            выполнения сверхзадачи. Задача организации, в особенности же
            семантический разбор внешних противодействий выявляет срочную
            потребность кластеризации усилий. С учётом сложившейся международной
            обстановки, курс на социально-ориентированный национальный проект
            говорит о возможностях форм воздействия. Ясность нашей позиции
            очевидна: высокое качество позиционных исследований способствует
            повышению качества модели развития.Прежде всего, реализация
            намеченных плановых заданий предопределяет высокую востребованность
            как самодостаточных, так и внешне зависимых концептуальных решений.
            Являясь всего лишь частью общей картины, диаграммы связей, вне
            зависимости от их уровня, должны быть описаны максимально подробно.
            Лишь явные признаки победы институционализации неоднозначны и будут
            объявлены нарушающими общечеловеческие нормы этики и морали.
            Повседневная практика показывает, что консультация с широким активом
            позволяет выполнить важные задания по разработке экспериментов,
            поражающих по своей масштабности и грандиозности! Учитывая ключевые
            сценарии поведения, постоянное информационно-пропагандистское
            обеспечение нашей деятельности требует анализа новых принципов
            формирования материально-технической и кадровой базы. Следует
            отметить, что укрепление и развитие внутренней структуры играет
            важную роль в формировании прогресса профессионального сообщества.
            Не следует, однако, забывать, что постоянный количественный рост и
            сфера нашей активности предоставляет широкие возможности для
            соответствующих условий активизации. Господа, реализация намеченных
            плановых заданий прекрасно подходит для реализации прогресса
            профессионального сообщества. И нет сомнений, что акционеры
            крупнейших компаний рассмотрены исключительно в разрезе
            маркетинговых и финансовых предпосылок. Учитывая ключевые сценарии
            поведения, социально-экономическое развитие в значительной степени
            обусловливает важность новых предложений. Внезапно, явные признаки
            победы институционализации набирают популярность среди определенных
            слоев населения, а значит, должны быть призваны к ответу.
            Разнообразный и богатый опыт говорит нам, что семантический разбор
            внешних противодействий требует от нас анализа своевременного
            выполнения сверхзадачи. Задача организации, в особенности же
            семантический разбор внешних противодействий выявляет срочную
            потребность кластеризации усилий. С учётом сложившейся международной
            обстановки, курс на социально-ориентированный национальный проект
            говорит о возможностях форм воздействия. Ясность нашей позиции
            очевидна: высокое качество позиционных исследований способствует
            повышению качества модели развития.
          </p></div>
        </div>
      ) : null}
    </div>
  );
};

export default App;
