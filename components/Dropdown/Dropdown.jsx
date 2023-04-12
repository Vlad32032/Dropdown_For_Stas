import React, { useEffect, useState } from "react";
import classes from "./Dropdown.module.css";

/* Компоненты иконок */

const IconArrow = () => {
    return (
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.45442 4.81225C1.06285 5.11842 0.497225 5.0492 0.19105 4.65763C-0.115124 4.26607 -0.0459015 3.70044 0.345663 3.39427L4.4423 0.190996C4.76791 -0.0636034 5.22507 -0.0636926 5.55078 0.190779L9.65074 3.39405C10.0424 3.70007 10.1119 4.26567 9.80585 4.65735C9.49983 5.04904 8.93423 5.11848 8.54255 4.81246L4.99691 2.04228L1.45442 4.81225Z" fill="#333333"/>
        </svg>
    );
};

const IconMagnifier = () => {
    return (
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.50006 0C8.53765 0 11.0001 2.46256 11.0001 5.50029C11.0001 6.74868 10.5842 7.89993 9.88346 8.82304L13.7791 12.7233C14.0718 13.0164 14.0715 13.4913 13.7785 13.784C13.4854 14.0767 13.0105 14.0764 12.7178 13.7834L8.82266 9.88388C7.89959 10.5847 6.74839 11.0006 5.50006 11.0006C2.46246 11.0006 0 8.53802 0 5.50029C0 2.46256 2.46246 0 5.50006 0ZM5.50006 1.5C3.2909 1.5 1.5 3.29098 1.5 5.50029C1.5 7.70961 3.2909 9.50058 5.50006 9.50058C7.70921 9.50058 9.50011 7.70961 9.50011 5.50029C9.50011 3.29098 7.70921 1.5 5.50006 1.5Z" fill="#C1C1C1"/>
        </svg>
    );
};

const IconCheckbox = () => {
    return (
        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.93426 6.75766L1.58682 4.40797C1.22381 4.04461 0.635262 4.04461 0.272255 4.40797C-0.0907517 4.77132 -0.0907517 5.36044 0.272255 5.72379L3.2703 8.72472C3.63699 9.09176 4.23152 9.09176 4.59821 8.72472L11.7277 1.58834C12.0908 1.22499 12.0908 0.635872 11.7277 0.272516C11.3647 -0.0908388 10.7762 -0.0908388 10.4132 0.272516L3.93426 6.75766Z" fill="white"/>
        </svg>
    );
};

const IconClose = () => {
    return (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.55231 0.447703C7.81591 0.711307 7.81591 1.13869 7.55231 1.4023L4.95475 4L7.55231 6.59771C7.79394 6.83935 7.81408 7.21861 7.61272 7.48318L7.55231 7.55231C7.2887 7.81591 6.86132 7.81591 6.59771 7.55231L4 4.95475L1.4023 7.55231C1.13869 7.81591 0.711307 7.81591 0.447703 7.55231C0.184099 7.2887 0.184099 6.86132 0.447703 6.59771L3.04525 4L0.447703 1.4023C0.206066 1.16066 0.18593 0.781401 0.387294 0.516826L0.447703 0.447703C0.711307 0.184099 1.13869 0.184099 1.4023 0.447703L4 3.04525L6.59771 0.447703C6.86132 0.184099 7.2887 0.184099 7.55231 0.447703Z" fill="#333333"/>
        </svg>
    )
};

/* Основной компонент Dropdown */

function Dropdown({ placeHolder, languages }) {

    // Состояния показа меню по умолчанию и выбранного значения(по умолчанию пустой массив) и значения поиска
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    // Эффект закрытия меню по нажятию в любом месте экрана 
    useEffect(() => {    
        // Функция закрытия меню
        const closeMenu = () => setShowMenu(false);
        // Вешаем обработчик на клик по любому месту экрана 
        window.addEventListener("click", closeMenu);
        // Убираем обработчик с экрана когда компонент будет размонтирован
        return () => window.removeEventListener("click", closeMenu);
    });

    // Функция поиска
    const search = (e) => {
        setSearchValue(e.target.value);
    };

    // Функция возвращает массив для вывода значений(языков) в меню выбора по умолчанию и при поиске
    const getLang = () => {
        if (!searchValue) {
            return languages;
        }
        return languages.filter((lang) => lang.value.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
    };    

    // Функция открытия/закрытия меню
    const selectShowMenu = (e) => {
        // Предотвращаем всплытие события closeMenu из useEffect
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    // Функция выбора языка (вешаем на каждый пункт меню)
    const chooseValue = (lang, e) => {
        // Предотвращаем всплытие события closeMenu из useEffect
        e.stopPropagation();

        let newValue;
        // если в selectedValue уже есть выбранное значение,
        // то массив отфильтруеться и вернется массив без выбранного значения
        if (selectedValue.findIndex((o) => o.value === lang.value) >= 0) {
            newValue = filterLang(lang);
        } else {
            // если нет, то будет создан новый массив со всеми значениями из selectedValue и выбранным значением
            newValue = [...selectedValue, lang];
        }

        setSelectedValue(newValue);
    };

    // Функция проверки выбора значения(языка)
    const isSelected = (option) => {
        if (selectedValue.length === 0) {
            return false;
        }
        
        // отфильтруем массив, вернем массив с выбранным значением, и если длина массива больше 0 вернем true
        return selectedValue.filter((o) => o.value === option.value).length > 0;
    };

    // Функция вернет отфильтрованный массив без выбранного значения
    const filterLang = (lang) => {
        return selectedValue.filter((o) => o.value !== lang.value);
    };

    // Функция удаления выбранного языка
    const removeTag = (option, e) => {
        // Предотвращаем всплытие события closeMenu из useEffect и selectShowMenu
        e.stopPropagation();
        setSelectedValue(filterLang(option));
    };

    // Функция вывода выбранных значений(языков)
    const getSelectedValue = () => {
        if(selectedValue.length === 0) {
            return placeHolder;
        };
        return (
            <>
                {selectedValue.map((lang) => (
                    <span key={lang.id} onClick={(e) => removeTag(lang, e)}>
                        {lang.value}
                        <IconClose/>
                    </span>
                ))}
            </>
        )
    };

    return (
        <div className={classes.dropdownWrapper}>
            <p>Язык</p>

            {/* Блок селектора */}
            <div onClick={selectShowMenu} className={classes.dropdownSelector}>
                <div className={classes.dropdownSelectedValue}>
                    {getSelectedValue()}
                </div>
                <div className={classes.dropdownTools}>
                    <IconArrow />         
                </div>
            </div>

            {/* Если состояние showMenu(true), тогда будет выведен блок с меню */}
            {showMenu && (
                <div className={classes.dropdownMenu}>
                    <div className={classes.dropdownMenuInputWrapper}>
                        <IconMagnifier />
                        <input 
                            className={classes.dropdownMenuInput}
                            type="text"
                            placeholder="Поиск"
                            onClick={(e) => e.stopPropagation()}
                            onChange={search}
                            value={searchValue}
                        />
                    </div>
                    {getLang().map((lang) => (
                        <div onClick={(e) => chooseValue(lang, e)} key={lang.id} className={classes.dropdownMenuLang}>
                            <div className={classes.dropdownMenuFlag}>
                                {lang.flag()}
                            </div>
                            <div className={classes.dropdownMenuValue}>{lang.value}</div>
                            <div className={`${classes.dropdownMenuCheckbox} ${isSelected(lang) && classes.active}`}>
                                <IconCheckbox />
                            </div>
                        </div>
                    ))}            
                </div>
            )}
        </div>
    );
};

export default Dropdown;