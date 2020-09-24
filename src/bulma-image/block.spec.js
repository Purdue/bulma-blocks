jest.setTimeout(30000)
import {
    createNewPost,
    enablePageDialogAccept,
    getEditedPostContent,
    insertBlock
} from '@wordpress/e2e-test-utils';

import {
    clickRadio,
    blockStartup,
    selectOption,
    clickElementByText, 
    clickCheckbox
} from '../test-helpers'

const block = {blockTitle: 'Bulma - Image', blockName: 'bulma-blocks/image'}

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

    describe( '🔬 Block Editor Settings', () => {
        test( '🔎 Media Library Button', async () => {
            await blockStartup(block)
    
            // open media library
            await clickElementByText('button', 'Open Media Library')
    
            // tests that media library does open
            expect(await page.$(`div.media-frame-title`)).not.toBeNull()
        })
    })

    describe( '🔬 Side Panel Settings', () => {
        describe( '🔬 Image Size and Alignment Settings', () => {
            test( '🔎 Aspect Ratio Options', async () => {
                await blockStartup(block)

                // Square 
                await selectOption('Image Aspect Ratio', 'is-square')
                
                let editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-square"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 5:4 
                await selectOption('Image Aspect Ratio', 'is-5by4')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-5by4"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 4:3 
                await selectOption('Image Aspect Ratio', 'is-4by3')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-4by3"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 3by2 
                await selectOption('Image Aspect Ratio', 'is-3by2')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-3by2"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 5by3 
                await selectOption('Image Aspect Ratio', 'is-5by3')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-5by3"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 16by9 
                await selectOption('Image Aspect Ratio', 'is-16by9')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-16by9"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 2by1 
                await selectOption('Image Aspect Ratio', 'is-2by1')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-2by1"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 3by1 
                await selectOption('Image Aspect Ratio', 'is-3by1')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-3by1"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 4by5 
                await selectOption('Image Aspect Ratio', 'is-4by5')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-4by5"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 3by4 
                await selectOption('Image Aspect Ratio', 'is-3by4')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-3by4"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 2by3 
                await selectOption('Image Aspect Ratio', 'is-2by3')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-2by3"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 3by5 
                await selectOption('Image Aspect Ratio', 'is-3by5')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-3by5"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 9by16 
                await selectOption('Image Aspect Ratio', 'is-9by16')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-9by16"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 1by2 
                await selectOption('Image Aspect Ratio', 'is-1by2')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-1by2"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 1by3 
                await selectOption('Image Aspect Ratio', 'is-1by3')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-1by3"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // auto 
                await selectOption('Image Aspect Ratio', '')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-square"')).toBe(false)
                expect( editedContent.includes('"size":"is-5by4"')).toBe(false)
                expect( editedContent.includes('"size":"is-4by3"')).toBe(false)
                expect( editedContent.includes('"size":"is-3by2"')).toBe(false)
                expect( editedContent.includes('"size":"is-5by3"')).toBe(false)
                expect( editedContent.includes('"size":"is-16by9"')).toBe(false)
                expect( editedContent.includes('"size":"is-2by1"')).toBe(false)
                expect( editedContent.includes('"size":"is-3by1"')).toBe(false)
                expect( editedContent.includes('"size":"is-4by5"')).toBe(false)
                expect( editedContent.includes('"size":"is-3by4"')).toBe(false)
                expect( editedContent.includes('"size":"is-2by3"')).toBe(false)
                expect( editedContent.includes('"size":"is-3by5"')).toBe(false)
                expect( editedContent.includes('"size":"is-9by16"')).toBe(false)
                expect( editedContent.includes('"size":"is-1by2"')).toBe(false)
                expect( editedContent.includes('"size":"is-1by3"')).toBe(false)
                expect( editedContent ).toMatchSnapshot()
            })

            test( '🔎 Image Alignment Options', async () => {
                await blockStartup(block)

                // center 
                await selectOption('Alignment', 'center')
                
                let editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"align":"center"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // left 
                await selectOption('Alignment', 'left')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"align":"left"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // right 
                await selectOption('Alignment', 'right')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"align":"right"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // full 
                await selectOption('Alignment', '')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"align":"center"')).toBe(false)
                expect( editedContent.includes('"align":"left"')).toBe(false)
                expect( editedContent.includes('"align":"right"')).toBe(false)
                expect( editedContent ).toMatchSnapshot()
            })

            test( '🔎 Mobile Stretch Checkbox', async () => {
                await blockStartup(block)

                await clickCheckbox('Full Width on Mobile?')

                let editedContent = await getEditedPostContent()

                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"fullWidthMo":true')).toBe(true)
            })
            
            test( '🔎 Height and Width Options', async () => {
                await blockStartup(block)

                const typeString = "400"

                // test width textbox
                await page.focus('#imgWidth')
                await page.keyboard.type(typeString, {delay: 10})
                await page.keyboard.press('Enter')

                let editedContent = await getEditedPostContent()

                expect( editedContent).toMatchSnapshot()
                expect( editedContent.includes(`"imgW":"${typeString}"`)).toBe(true)

                // test height textbox
                await page.focus('#imgHeight')
                await page.keyboard.type(typeString, {delay: 10})
                await page.keyboard.press('Enter')

                editedContent = await getEditedPostContent()

                expect( editedContent).toMatchSnapshot()
                expect( editedContent.includes(`"imgH":"${typeString}"`)).toBe(true)
            })
        })
    
        describe( '🔬 Image Alt Text and Caption Settings', () => {
            test( '🔎 Alt Text Textarea', async () => {
                await blockStartup(block)

                const typeString = "Test Alt Text"

                await clickElementByText('label', 'Alt Text')
                await page.keyboard.type(typeString, {delay: 10})

                let editedContent = await getEditedPostContent()

                expect( editedContent).toMatchSnapshot()
                expect( editedContent.includes(`"altText":"${typeString}"`)).toBe(true)
            })
            test( '🔎 Image Caption Textarea', async () => {
                await blockStartup(block)

                const typeString = "Test Image Caption"

                await clickElementByText('label', 'Image Caption')
                await page.keyboard.type(typeString, {delay: 10})

                let editedContent = await getEditedPostContent()

                expect( editedContent).toMatchSnapshot()
                expect( editedContent.includes(`"caption":"${typeString}"`)).toBe(true)
            })
            test( '🔎 Image Photo Credit Textbox', async () => {
                await blockStartup(block)

                const typeString = "Test Image Caption Credit"

                await clickElementByText('label', 'Caption - Photo Credit')
                await page.keyboard.type(typeString, {delay: 10})
                await page.keyboard.press('Enter')

                let editedContent = await getEditedPostContent()

                expect( editedContent).toMatchSnapshot()
                expect( editedContent.includes(`"captionCredit":"${typeString}"`)).toBe(true)
            })
        })
    })

})