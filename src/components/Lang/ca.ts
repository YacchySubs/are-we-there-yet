/**
 * Traducció a Català
 * @author Yacchy (yacchysubs@gmail.com)
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
    ALL_COMPLETE: `No hi ha projectes actius actualment, torna un altre dia :)`,
    // Error state
    CONNECTION_ERROR: `Error de conexió`,

    /**
     * Configuration Page
     */
    CONFIG_HEADER: `Configuració`,
    // Website section
    WEBSITE_SETTINGS_HEADER: `Paràmetres del lloc web`,
    APP_URL: `La URL de la teva aplicació`,
    LINK_PAGE: `Anar a la pàgina`,
    PAGE_BGCOLOR: `Color principal del fons del lloc web`,
    NO_COLOR: `Ignonar el color de fons`,
    RECOMMENDED_BGCOLOR: `Color de fons recomanat`,
    OVERRIDE_BGCOLOR: `Ignorar recomanació`,
    // Theme section
    THEME_HEADER: `Tema de color`,
    THEME_LIGHT: `Clar`,
    THEME_DARK: `Fosc`,
    // Size section
    SIZE_HEADER: `Elección de mida`,
    SIZE_SMALL: `Compacte (no recomanat)`,
    SIZE_NORMAL: `Normal`,
    // Accent section
    ACCENT_HEADER: `Color d'èmfasi`,
    ACCENT_RED: `Vermell`,
    ACCENT_YELLOW: `Groc`,
    ACCENT_GREEN: `Verd`,
    ACCENT_BLUE: `Blau`,
    ACCENT_INDIGO: `Indi`,
    ACCENT_PURPLE: `Morat`,
    ACCENT_PINK: `Rosa`,
    ACCENT_NONE: `Cap`,
    // Language section
    LANGUAGE_HEADER: `Idioma`,
    // Description in Wordpress embed code
    EMBED_HEADER: `Codi incrustable a Wordpress`,
    EMBED_DESCRIPTION: `Redimensionar l'iframe després de la càrrega`,
    EMBED_SHOW: `Mostrar codi incrustable`,
    EMBED_HIDE: `Ocultar codi incrustable`,
    // Example
    ALL_POSITIONS: `Totes les posicions de l'staff`,
    EXAMPLE_ERROR: `Aquest exemple d'error`,
    EXAMPLE_STATUS: `Això és un exemple de msisatge d'estat opcional`,

    /**
     * Unit (e.g. Show)
     * {0} = list of groups
     * {1} = number of remaining units
     * {2} = relative time
     */
    UNIT_JOINT_WITH: `En colaboració amb {0}`,
    UNIT_SHOW_LESS: `Veure'n menys`,
    // Plural version if needed, fallback to UNIT_SHOW_LESS otherwise
    UNIT_SHOW_LESS_PLURAL: undefined,
    UNIT_SHOW_REMAINDER_SINGULAR: `Mostrar el %SUBUNIT_SINGULAR% restant...`,
    // e.g. Show 2 more episodes...
    UNIT_SHOW_REMAINDER_PLURAL: `Mostrar els {1} %SUBUNIT_PLURAL% restants...`,
    // e.g. Updated 5 hours ago
    UNIT_UPDATED: `Actualitzat {2}`,

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
    SUBUNIT_TO_RELEASE: `L'%SUBUNIT_SHORT% {0} està llest per publicar-se`,
    // shown when there are unfinished positions
    SUBUNIT_IN_PROGRESS: `A l'%SUBUNIT_SHORT% {0} li queda: {2}`,
    // shown when all positions are marked incomplete after publication
    SUBUNIT_NO_PROGRESS: `(aún no hay progreso)`,
};

import ca from 'javascript-time-ago/locale/ca';
const lang: Language = {
    locale: ca,
    strings: strings,
};

export default {
    anime_airing: languageBuilder(lang, anime_airing),
    anime_bluray: languageBuilder(lang, anime_bluray),
    manga_chapter: languageBuilder(lang, manga_chapter),
    manga_volume: languageBuilder(lang, manga_volume),
};
