import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const ToolsPage = () => {
    return (
        <div className='container w-full space-y-4'>
            <h1>HERRAMIENTAS</h1>
            <div className='space-y-2'>
                <h2>Botones normales</h2>
                <div className='flex flex-wrap gap-4'>
                    <Button variant={"default"} size={"default"}>
                        Default
                    </Button>
                    <Button variant={"destructive"} size={"default"}>
                        Destructive
                    </Button>
                    <Button variant={"ghost"} size={"default"}>
                        ghost
                    </Button>
                    <Button variant={"link"} size={"default"}>
                        link
                    </Button>
                    <Button variant={"outline"} size={"default"}>
                        outline
                    </Button>
                    <Button variant={"secondary"} size={"default"}>
                        secondary
                    </Button>
                </div>
                <h2>Botones Grandes</h2>
                <div className='flex flex-wrap gap-4'>
                    <Button variant={"default"} size={"lg"}>
                        Default
                    </Button>
                    <Button variant={"destructive"} size={"lg"}>
                        Destructive
                    </Button>
                    <Button variant={"ghost"} size={"lg"}>
                        ghost
                    </Button>
                    <Button variant={"link"} size={"lg"}>
                        link
                    </Button>
                    <Button variant={"outline"} size={"lg"}>
                        outline
                    </Button>
                    <Button variant={"secondary"} size={"lg"}>
                        secondary
                    </Button>
                </div>
                <h2>Botones pequeños</h2>
                <div className='flex flex-wrap gap-4'>
                    <Button variant={"default"} size={"sm"}>
                        Default
                    </Button>
                    <Button variant={"destructive"} size={"sm"}>
                        Destructive
                    </Button>
                    <Button variant={"ghost"} size={"sm"}>
                        ghost
                    </Button>
                    <Button variant={"link"} size={"sm"}>
                        link
                    </Button>
                    <Button variant={"outline"} size={"sm"}>
                        outline
                    </Button>
                    <Button variant={"secondary"} size={"sm"}>
                        secondary
                    </Button>
                </div>
                <h2>Botones tamaño icono</h2>
                <div className='flex flex-wrap gap-4'>
                    <Button variant={"default"} size={"icon"}>
                        Def
                    </Button>
                    <Button variant={"destructive"} size={"icon"}>
                        Dtv
                    </Button>
                    <Button variant={"ghost"} size={"icon"}>
                        gst
                    </Button>
                    <Button variant={"link"} size={"icon"}>
                        link
                    </Button>
                    <Button variant={"outline"} size={"icon"}>
                        otl
                    </Button>
                    <Button variant={"secondary"} size={"icon"}>
                        sec
                    </Button>
                </div>
            </div>
            <div className='space-y-2'>
                <div className='space-y-2'>
                    <Input />
                    <Input icon={<Search />} iconBgColor='bg-secondary' />
                </div>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Titulo de la card</CardTitle>
                    <CardAction>
                        Esto es un cardAction
                    </CardAction>
                </CardHeader>
                <CardContent className='space-y-4'>
                    <div>
                        Contenido de la Card
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea obcaecati nisi fuga, magni culpa veniam autem aspernatur molestias est accusamus voluptatem dolores quod! Quia perspiciatis nostrum recusandae similique quo numquam.
                    </div>
                    <CardDescription>
                        Descripciones
                    </CardDescription>
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
                </CardContent>
                <CardFooter>
                    Footer de la card
                </CardFooter>
            </Card>
        </div>
    )
}

export default ToolsPage