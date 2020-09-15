jest.setTimeout(30000)
import {
    createNewPost,
    enablePageDialogAccept,
    getEditedPostContent,
    getAllBlocks,
    selectBlockByClientId,
    insertBlock
} from '@wordpress/e2e-test-utils';

import {
    clickElementByText,
    blockStartup,
    clickCheckbox,
} from '../test-helpers'

const block = {blockTitle: 'Bulma - Box', blockName: 'bulma-blocks/box'}

describe( `🔬 ${block.blockTitle} Block`, () => {
    beforeAll( async () => {
        await enablePageDialogAccept();
    } );
    beforeEach( async () => {
        await createNewPost();
    } );

    test( '🔎 Block should be available.', async () => {
        await insertBlock(block.blockTitle)

        // tests that the block is properly inserted and matches the existing snapshot
        expect(await page.$(`[data-type="${block.blockName}"]`)).not.toBeNull()
        expect( await getEditedPostContent() ).toMatchSnapshot()
    } )

    test( '🔎 Add inner block button.', async () => {
        await blockStartup(block)

        const innerBlockButton = await page.$('.block-editor-button-block-appender[aria-label="Add block"]')
        await innerBlockButton.click()

        const blockButton = await page.$('.components-button.editor-block-list-item-paragraph')
        await blockButton.click()

        expect(await page.$(`[data-type="core/paragraph"]`)).not.toBeNull()
        expect( await getEditedPostContent() ).toMatchSnapshot()
    })
})