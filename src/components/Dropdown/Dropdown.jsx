import React, { useEffect, useState } from "react";
import classes from "./Dropdown.module.css";

import { IconArrow } from "./icons/IconArrow.jsx"
import { IconMagnifier } from "./icons/IconMagnifier.jsx"
import { IconCheckbox } from "./icons/IconCheckbox.jsx"
import { IconClose } from "./icons/IconClose.jsx"

function Dropdown({ placeHolder, languages, multiSelect, flagShow }) {
    
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

        if (multiSelect) {
            // если в selectedValue уже есть выбранное значение,
            // то массив отфильтруеться и вернется массив без выбранного значения
            if (selectedValue.findIndex((o) => o.value === lang.value) >= 0) {
                newValue = filterLang(lang);
            } else {
                // если нет, то будет создан новый массив со всеми значениями из selectedValue и выбранным значением
                newValue = [...selectedValue, lang];
            }

            setSelectedValue(newValue);
        } else {
            setSelectedValue([lang]);
        }
    };

    // Функция проверки выбора значения(языка)
    const isSelected = (option) => {
        if (selectedValue.length === 0) {
            return false;
        }
        
        return selectedValue.filter((o) => o.value === option.value).length > 0;
    };

    // Функция вернет отфильтрованный массив без выбранного значения
    const filterLang = (lang) => {
        return selectedValue.filter((o) => o.value !== lang.value);
    };

    // Функция удаления выбранного языка
    const removeTag = (option, e) => {
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

            <div onClick={selectShowMenu} className={classes.dropdownSelector}>
                <div className={classes.dropdownSelectedValue}>
                    {getSelectedValue()}
                </div>
                <div className={`${classes.dropdownTools} ${showMenu? classes.dropdownToolsOn : ""}`}>
                    <IconArrow />         
                </div>
            </div>

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
                            { flagShow && (
                                <div className={classes.dropdownMenuFlag}>
                                    {lang.flag()}
                                </div>
                            )}
                            <div className={classes.dropdownMenuValue}>{lang.value}</div>
                            <div className={`${classes.dropdownMenuCheckbox} ${isSelected(lang) && classes.active}`}>
                                <IconCheckbox />
                            </div>
                        </div>
                    ))}
                    { (getLang().length === 0) &&
                        <div className={classes.dropdownMenuLang}>
                            <div className={classes.dropdownMenuValue}>Ничего не найденно</div>
                        </div>
                    }        
                </div>
            )}
        </div>
    );
};

export default Dropdown;