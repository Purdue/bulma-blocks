jest.setTimeout(30000)
import {
    createNewPost,
    enablePageDialogAccept,
    getEditedPostContent,
    insertBlock
} from '@wordpress/e2e-test-utils';

import {
    blockStartup,
    clickRadio,
    clickElementByText
} from '../test-helpers'

const block = {blockTitle: 'Bulma - Icon', blockName: 'bulma-blocks/icon'}

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

    describe( '🔬 Side Panel Settings', () => {
        describe( '🔬 Radio Settings', () => {
            test( '🔎 Icon Container Size Options', async () => {
                await blockStartup(block)

                // select small container
                await clickRadio('Icon Container Size', 'is-small')
                
                let editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"container":"is-small"')).toBe(true)

                // select medium container
                await clickRadio('Icon Container Size', 'is-medium')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"container":"is-medium"')).toBe(true)

                // select large container
                await clickRadio('Icon Container Size', 'is-large')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"container":"is-large"')).toBe(true)

                // select regular container
                await clickRadio('Icon Container Size', 'sm')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"container":"is-large"')).toBe(false)
                expect( editedContent.includes('"container":"is-medium"')).toBe(false)
                expect( editedContent.includes('"container":"is-small"')).toBe(false)
            })

            test( '🔎 Icon Size Options', async () => {
                await blockStartup(block)

                // select regular
                await clickRadio('Icon Size', 'fa-lg')
                
                let editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"icon":"fa-lg"')).toBe(true)

                // select medium
                await clickRadio('Icon Size', 'fa-2x')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"icon":"fa-2x"')).toBe(true)

                // select large
                await clickRadio('Icon Size', 'fa-3x')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"icon":"fa-3x"')).toBe(true)

                // select regular
                await clickRadio('Icon Size', 'sm')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"icon":"fa-3x"')).toBe(false)
                expect( editedContent.includes('"icon":"fa-2x"')).toBe(false)
                expect( editedContent.includes('"icon":"fa-lg"')).toBe(false)
            })
        })
        describe( '🔬 Icon Class and Link Settings', () => {
            test( '🔎 Icon Class Textbox', async () => {
                await blockStartup(block)

                const typeString = "Font Awesome Icon Name"
            
                // focus the text box then type into it with the virtual keyboard
                await clickElementByText('label', 'Font Awesome Icon Name')
                await page.keyboard.type(typeString, {delay: 10})

                const editedContent = await getEditedPostContent()

                expect( editedContent).toMatchSnapshot()
                expect( editedContent.includes(`"faClass":"${typeString}"`)).toBe(true)
            })

            test( '🔎 Icon Optional Link', async () => {
                await blockStartup(block)

                const typeString = "https://www.purdue.edu"
            
                // focus the text box then type into it with the virtual keyboard
                await clickElementByText('label', 'Link (Optional)')
                await page.keyboard.type(typeString, {delay: 10})

                const editedContent = await getEditedPostContent()

                expect( editedContent).toMatchSnapshot()
                expect( editedContent.includes(`"link":"${typeString}"`)).toBe(true)
            })
        })
    })

})