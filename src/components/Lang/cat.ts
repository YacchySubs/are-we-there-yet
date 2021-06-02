/**
 * Traducció a Català
 * @author Yacchy
 */

import {
    Config,
    Strings,
    Language,
    languageBuilder,
} from '$components/Lang/builder';

const anime_airing: Config = {
    UNIT_SINGULAR: `anime`,
    UNIT_PLURAL: `animes`,
    UNIT_SHORT: `Anime`,
    SUBUNIT_SINGULAR: `episodi`,
    SUBUNIT_PLURAL: `episodis`,
    SUBUNIT_SHORT: `ep.`,
    // e.g. Ep. 1 airs in 3 days
    SUBUNIT_VERB_FUTURE: `s'emetrà`,
    // e.g. Ep. 2 aired 2 hours ago
    SUBUNIT_VERB_PAST: `s'ha emès`,
};

const anime_bluray: Config = {
    UNIT_SINGULAR: `sèrie`,
    UNIT_PLURAL: `sèries`,
    UNIT_SHORT: `Sèrie`,
    SUBUNIT_SINGULAR: `volum`,
    SUBUNIT_PLURAL: `volums`,
    SUBUNIT_SHORT: `Vol.`,
    // e.g. Vol. 1 drops in 3 days
    SUBUNIT_VERB_FUTURE: `s'estrenarà`,
    // e.g. Vol. 2 published 2 hours ago
    SUBUNIT_VERB_PAST: `es va estrenar`,
};

const manga_chapter: Config = {
    UNIT_SINGULAR: `manga`,
    UNIT_PLURAL: `mangues`,
    UNIT_SHORT: `Manga`,
    SUBUNIT_SINGULAR: `capítol`,
    SUBUNIT_PLURAL: `capítols`,
    SUBUNIT_SHORT: `Cap.`,
    // e.g. Ch. 1 drops in 3 days
    SUBUNIT_VERB_FUTURE: `s'estrenarà`,
    // e.g. Ch. 2 published 2 hours ago
    SUBUNIT_VERB_PAST: `s'ha estrenat`,
};

const manga_volume: Config = {
    UNIT_SINGULAR: `manga`,
    UNIT_PLURAL: `mangues`,
    UNIT_SHORT: `Manga`,
    SUBUNIT_SINGULAR: `tom`,
    SUBUNIT_PLURAL: `toms`,
    SUBUNIT_SHORT: `Tom`,
    // e.g. Vol. 1 drops in 3 days
    SUBUNIT_VERB_FUTURE: `es publicarà`,
    // e.g. Vol. 2 published 2 hours ago
    SUBUNIT_VERB_PAST: `s'ha publicat`,
};

const strings: Strings = {
    /**
     * States without any projects
     */
    // Empty state
    ALL_COMPLETE: `Nohi ha projectes actius actualment, torna en uns mesos :)`,
    // Error state
    CONNECTION_ERROR: `Error de conexió`,

    /**
     * Configuration Page
     */
    CONFIG_HEADER: `Configuració`,
    // Website section
    WEBSITE_SETTINGS_HEADER: `Parámetros del sitio`,
    APP_URL: `La URL de tu aplicación`,
    LINK_PAGE: `Ir a la página`,
    PAGE_BGCOLOR: `Color principal del fondo del sitio`,
    NO_COLOR: `Ignonar el color de fondo`,
    RECOMMENDED_BGCOLOR: `Color de fondo recomendado`,
    OVERRIDE_BGCOLOR: `Ignorar recomendación`,
    // Theme section
    THEME_HEADER: `Tema de color`,
    THEME_LIGHT: `Claro`,
    THEME_DARK: `Oscuro`,
    // Size section
    SIZE_HEADER: `Elección de tamaño`,
    SIZE_SMALL: `Compacto (no recomendado)`,
    SIZE_NORMAL: `Normal`,
    // Accent section
    ACCENT_HEADER: `Color de énfasis`,
    ACCENT_RED: `Rojo`,
    ACCENT_YELLOW: `Amarillo`,
    ACCENT_GREEN: `Verde`,
    ACCENT_BLUE: `Azul`,
    ACCENT_INDIGO: `Índigo`,
    ACCENT_PURPLE: `Morado`,
    ACCENT_PINK: `Rosa`,
    ACCENT_NONE: `Ninguno`,
    // Language section
    LANGUAGE_HEADER: `Idioma`,
    // Description in Wordpress embed code
    EMBED_HEADER: `Código incrustable para Wordpress`,
    EMBED_DESCRIPTION: `Redimensionar el iframe tras la carga`,
    EMBED_SHOW: `Mostrar código incrustable`,
    EMBED_HIDE: `Ocultar código incrustable`,
    // Example
    ALL_POSITIONS: `Todos los puestos del staff`,
    EXAMPLE_ERROR: `Este ejemplo de error`,
    EXAMPLE_STATUS: `Este es un ejemplo de mensaje de estado opcional`,

    /**
     * Unit (e.g. Show)
     * {0} = list of groups
     * {1} = number of remaining units
     * {2} = relative time
     */
    UNIT_JOINT_WITH: `En colaboración con {0}`,
    UNIT_SHOW_LESS: `Mostrar menos`,
    // Plural version if needed, fallback to UNIT_SHOW_LESS otherwise
    UNIT_SHOW_LESS_PLURAL: undefined,
    UNIT_SHOW_REMAINDER_SINGULAR: `Mostrar el %SUBUNIT_SINGULAR% restante...`,
    // e.g. Show 2 more episodes...
    UNIT_SHOW_REMAINDER_PLURAL: `Mostrar los {1} %SUBUNIT_PLURAL% restantes...`,
    // e.g. Updated 5 hours ago
    UNIT_UPDATED: `Actualizado {2}`,

    /**
     * Subunit (e.g. Episode)
     * {0} = subunit number
     * {1} = relative time
     * {2} = list of positions
     */
    // e.g. Ep. 1 airs in 5 days
    SUBUNIT_NOT_PUBLISHED: `%SUBUNIT_SHORT% {0} %SUBUNIT_VERB_FUTURE% {1}`,
    // e.g. Ep. 1 aired 4 days ago
    SUBUNIT_WAS_PUBLISHED: `El %SUBUNIT_SHORT% {0} %SUBUNIT_VERB_PAST% {1}`,
    // shown when all positions are marked complete
    SUBUNIT_TO_RELEASE: `%SUBUNIT_SHORT% {0} está listo para ser publicado`,
    // shown when there are unfinished positions
    SUBUNIT_IN_PROGRESS: `Al %SUBUNIT_SHORT% {0} le falta: {2}`,
    // shown when all positions are marked incomplete after publication
    SUBUNIT_NO_PROGRESS: `(aún no hay progreso)`,
};

import es from 'javascript-time-ago/locale/es';
const lang: Language = {
    locale: es,
    strings: strings,
};

export default {
    anime_airing: languageBuilder(lang, anime_airing),
    anime_bluray: languageBuilder(lang, anime_bluray),
    manga_chapter: languageBuilder(lang, manga_chapter),
    manga_volume: languageBuilder(lang, manga_volume),
};
