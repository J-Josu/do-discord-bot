import { SlashCommandBuilder } from 'discord.js';
import { MultiFileCommandDefinition, SubCommandDefinitionFrom } from '../../+type';
export { SearchOptions, SearchResult, documentTypes, librarySearch, customLibrarySearch } from '../../../plugins/scrapers/bibliofi/libraryScraper';


const baseCommand = (() => {
    return {
        data: new SlashCommandBuilder()
            .setName(`bibliofi`)
            .setDescription(`Commands related to the library of the Facultad de Informatica - UNLP`)
            .setDescriptionLocalization('es-ES', `Commandos relacionados a la biblioteca de la Facultad de Informatica - UNLP`)
        ,
    };
}) satisfies MultiFileCommandDefinition;

export type SubCommandDefinition = SubCommandDefinitionFrom<typeof baseCommand>;

export default baseCommand;
