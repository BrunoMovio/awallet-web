import { PageContainer } from "../../../components/page-container";
import { PageHeading } from "../../../components/typography/page-heading.component";
import { Card } from "../../../components/card";
import {
    Button,
    HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "../../../components/forms/form";
import { FormikProps } from "formik";
import { RegisterAssetForm, registerAssetForm } from "./register-asset.form";
import { Input } from '@chakra-ui/react'


export const WalletPage = ({currentWallet, setWallet}: any) => {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [value, setValue] = useState(0)

    const changeName = (e: any) => setName(e.target.value)
    const changeDate = (e: any) => setDate(e.target.value)
    const changeValue = (e: any) => setValue(e.target.value)

    const addAsset = () => {
        setWallet({...currentWallet, data: [...currentWallet.data, {
            Date: date,
            asset_type: "stock",
            asset_name: name,
            value: String(value),
          }]})
    }
  return (
    <PageContainer>
      <div style={{ padding: "8px" }} />
      <HStack>
      <Card textAlign={"center"} mx={12}>
            <PageHeading pb={4}>Carteira</PageHeading>
            <TableContainer>
                <Table size='sm'>
                    <Thead>
                    <Tr>
                        <Th>Ação</Th>
                        <Th>Data de aquisição</Th>
                        <Th isNumeric>Valor adquirido</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    {currentWallet.data.map((item: any) => <Tr>
                        <Td>{item.asset_name}</Td>
                        <Td>{item.Date}</Td>
                        <Td isNumeric>{item.value}</Td>
                    </Tr>
                    )}
                    </Tbody>
                </Table>
            </TableContainer>
        </Card>
        <Card mx={12} w={"30vw"}>
            <PageHeading px={24}  textAlign={"center"}>Adicionar ação</PageHeading>
            Nome:
            <Input
                placeholder="Nome da ação"
                type="text"
                onChange={changeName}
            />
            Data:
            <Input
                placeholder="Data de aquisição"
                type="text"
                onChange={changeDate}
            />
            Nome:
            <Input
                placeholder="Valor adquirido"
                type="number"
                onChange={changeValue}
            />
            
            <Button
                colorScheme="brand"
                mt={"2"}
                w="full"
                type="submit"
                onClick={addAsset}
            >
                Adicionar ação
            </Button>

        </Card>
      </HStack>
        
    </PageContainer>
  );
};
