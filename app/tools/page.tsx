import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const ToolsPage = () => {
    return (
        <div className='container w-full space-y-4'>
            <div className='flex flex-wrap gap-4'>
                <Button variant={"default"}>
                    Default
                </Button>
                <Button variant={"destructive"}>
                    Destructive
                </Button>
                <Button variant={"ghost"}>
                    ghost
                </Button>
                <Button variant={"link"}>
                    link
                </Button>
                <Button variant={"outline"}>
                    outline
                </Button>
                <Button variant={"secondary"}>
                    secondary
                </Button>
            </div>
            <Input>
            </Input>
        </div>
    )
}

export default ToolsPage