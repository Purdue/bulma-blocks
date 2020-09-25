// link card test
jest.setTimeout(30000)
import {
    createNewPost,
    enablePageDialogAccept,
    getEditedPostContent,
    insertBlock,
} from '@wordpress/e2e-test-utils';

import {
    clickElementByText,
    blockStartup,
    clickRadio,
    clickCheckbox
} from '../test-helpers'

const block = {blockTitle: 'Link Card', blockName: 'bulma-blocks/link-card'}

describe( `🔬 ${block.blockTitle} Block`, () => {
    beforeAll( async () => {
        await enablePageDialogAccept();
    } );
    beforeEach( async () => {
        await createNewPost();
    } );

    test( '🔬 Block should be available.', async () => {
        await insertBlock( block.blockTitle )

        // tests that the block is properly inserted and matches the existing snapshot
        expect(await page.$(`[data-type="${block.blockName}"]`)).not.toBeNull()
        expect( await getEditedPostContent()).toMatchSnapshot()
    } )

    describe( '🔬 Block Editor Fields', () => {
        test( '🔎 Button should open Media Library.', async () => {
            await blockStartup(block)

            // open media library
            await clickElementByText('button', 'Open Media Library')

            // tests that media library does open
            expect(await page.$(`div.media-frame-title`)).not.toBeNull()

            /*
            NOTE: explore further to see how media items can be spoofed so that the actual
                image urls can be properly snapshotted and tested.
            */
        })
        
        test( '🔎 Card Text Field', async () => {
            await blockStartup(block)

            const typeString = "Test Card Text"
            
            // focus the text box then type into it with the virtual keyboard
            await page.focus( '.input[placeholder="Card text..."]' );
            await page.keyboard.type(typeString, {delay: 10})

            const editedContent = await getEditedPostContent()

            expect( editedContent).toMatchSnapshot()
            expect( editedContent.includes(`"subText":"${typeString}"`)).toBe(true)
        })

        test( '🔎 Card Link Text', async () => {
            await blockStartup(block)

            const typeString = "Test Card Link Text"
            
            // focus the text box then type into it with the virtual keyboard
            await page.focus( '.input[placeholder="Link text..."]' );
            await page.keyboard.type(typeString, {delay: 10})

            const editedContent = await getEditedPostContent()

            expect( editedContent).toMatchSnapshot()
            expect( editedContent.includes(`"linkText":"${typeString}"`)).toBe(true)
        })

        test( '🔎 Card Link URL', async () => {
            await blockStartup(block)

            const typeString = "Test Card Link Url"
            
            // focus the text box then type into it with the virtual keyboard
            await page.focus( '.input[placeholder="Paste permalink or url..."]' );
            await page.keyboard.type(typeString, {delay: 10})

            const editedContent = await getEditedPostContent()

            expect( editedContent).toMatchSnapshot()
            expect( editedContent.includes(`"link":"${typeString}"`)).toBe(true)
        })
    })
    describe( '🔬 Side Panel Settings', () => {
        test( '🔎 Card Layout Radio Options.', async () => {
            await blockStartup(block)

            // horizontal
            await clickRadio('Layout of the card', 'horizontal')

            let editedContent = await getEditedPostContent()

            expect( editedContent.includes(`"layout":"vertical"`)).toBe(false)
            expect( editedContent).toMatchSnapshot()

            // vertical
            await clickRadio('Layout of the card', 'vertical')

            editedContent = await getEditedPostContent()

            expect( editedContent.includes(`"layout":"vertical"`)).toBe(true)
            expect( editedContent).toMatchSnapshot()
        })
        test( '🔎 Image alt text should be editable.', async () => {
            await blockStartup(block)

            const typeString = "Image alt text."
            
            // focus the text box then type into it with the virtual keyboard
            await clickElementByText('label', 'Image Alt Text')
            await page.keyboard.type(typeString, {delay: 10})

            const editedContent = await getEditedPostContent()

            expect( editedContent).toMatchSnapshot()
            expect( editedContent.includes(`"altText":"${typeString}"`)).toBe(true)
        })
        test( '🔎 Open link in new tab checkbox', async () => {
            await blockStartup(block)
            
            await clickCheckbox('Open link in new tab?')

            const editedContent = await getEditedPostContent()

            expect( editedContent).toMatchSnapshot()
            expect( editedContent.includes(`"external":true`)).toBe(true)
        })
    })

} );
