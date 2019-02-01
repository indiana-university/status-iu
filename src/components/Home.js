import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, List, Row, Table } from 'rivet-react';
import { CaratDown, IconDanger, IconMaintenance, IconSuccess, IconWarning } from '../icons';

export class Home extends Component {
    render() {
        return <React.Fragment>
            {/* Rewrite as component */}
            <Container width="junior" center>
                <Row>
                    <Col md={8}>
                        <div className="rvt-box rvt-box--card siu-current-status">
                            <div className="rvt-p-lr-sm rvt-p-tb-md">
                                <h1 className="rvt-ts-md rvt-lh-title rvt-text-bold">Current status</h1>
                                <p className="rvt-m-top-xxs rvt-m-bottom-remove siu-subtle-text">Updates for UITS systems and services.</p>
                            </div>
                            <List className="rvt-plain-list">
                                <li className="rvt-box__row">
                                    <div className="siu-notice rvt-p-tb-xs">
                                        <div className="siu-notice__icon siu-notice__icon--danger">{ IconDanger }</div>
                                        <div className="siu-notice__body">
                                            <Link to="/" className="siu-plain-link rvt-link-bold">Fake issue</Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="rvt-box__row">
                                    <div className="siu-notice rvt-p-tb-xs">
                                        <div className="siu-notice__icon siu-notice__icon--danger">{ IconDanger }</div>
                                        <div className="siu-notice__body">
                                            <Link to="/" className="siu-plain-link rvt-link-bold">Fake issue two</Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="rvt-box__row">
                                    <div className="siu-notice rvt-p-tb-xs">
                                        <div className="siu-notice__icon siu-notice__icon--warning">{ IconWarning }</div>
                                        <div className="siu-notice__body">
                                            <Link to="/" className="siu-plain-link rvt-link-bold">Fake ongoing issue</Link>
                                        </div>
                                    </div>
                                </li>
                            </List>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* Rewrite as new component */}
            <Container width="junior" center margin={{ bottom: 'lg', top: 'lg' }} className="rvt-m-tb-xxl-md-up">
                <div className="rvt-p-left-sm">
                    <List className="siu-key">
                        <li className="siu-key__item"><span className="siu-key__icon siu-key__icon--danger">{ IconDanger }</span> Alert</li>
                        <li className="siu-key__item"><span className="siu-key__icon siu-key__icon--warning">{ IconWarning }</span> Ongoing Issue</li>
                        <li className="siu-key__item"><span className="siu-key__icon">{ IconMaintenance }</span> Maintenance</li>
                        <li className="siu-key__item"><span className="siu-key__icon siu-key__icon--success">{ IconSuccess }</span> Healthy</li>
                    </List>
                </div>
                <div className="rvt-box rvt-box--card rvt-m-top-lg">
                    <div className="siu-matrix">
                        {/* Rewrite as component for table */}
                        <Table className="rvt-table-plain siu-matrix__table">
                            <caption className="rvt-sr-only">Status matrix table</caption>
                            <thead>
                                <tr>
                                    <th scope="col" className="rvt-p-tb-lg"><span className="rvt-ts-18">Service category</span></th>
                                    <th scope="col" className="rvt-p-tb-lg">IUB</th>
                                    <th scope="col" className="rvt-p-tb-lg">IUPUI</th>
                                    <th scope="col" className="rvt-p-tb-lg">IUPUC</th>
                                    <th scope="col" className="rvt-p-tb-lg">IUE</th>
                                    <th scope="col" className="rvt-p-tb-lg">IUFW</th>
                                    <th scope="col" className="rvt-p-tb-lg">IUK</th>
                                    <th scope="col" className="rvt-p-tb-lg">IUN</th>
                                    <th scope="col" className="rvt-p-tb-lg">IUSB</th>
                                    <th scope="col" className="rvt-p-tb-lg">IUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="rvt-box__row">
                                    <th scope="row" width="400">
                                        <Button type="button" className="siu-group-header" data-group="authentication" aria-expanded={ false }>
                                            <span className="siu-group-header__icon rvt-m-right-xs"><CaratDown /></span>
                                            <span> Authentication</span>
                                        </Button>
                                    </th>
                                    <td className="siu-matrix__campus-status siu-matrix__campus-status--success">{ IconSuccess }</td>
                                    <td className="siu-matrix__campus-status siu-matrix__campus-status--success">{ IconSuccess }</td>
                                    <td className="siu-matrix__campus-status siu-matrix__campus-status--success">{ IconSuccess }</td>
                                    <td className="siu-matrix__campus-status siu-matrix__campus-status--success">{ IconSuccess }</td>
                                    <td className="siu-matrix__campus-status siu-matrix__campus-status--success">{ IconSuccess }</td>
                                    <td className="siu-matrix__campus-status siu-matrix__campus-status--success">{ IconSuccess }</td>
                                    <td className="siu-matrix__campus-status siu-matrix__campus-status--success">{ IconSuccess }</td>
                                    <td className="siu-matrix__campus-status siu-matrix__campus-status--success">{ IconSuccess }</td>
                                    <td className="siu-matrix__campus-status siu-matrix__campus-status--success">{ IconSuccess }</td>
                                </tr>
                                <tr className="rvt-box__row siu-matrix__group-child" data-group-child="authentication" hidden={ true }>
                                    <th scope="row">
                                        <Link to="/">Fake child element</Link>
                                    </th>
                                    <td className="siu-matrix__campus-status siu-matrix__campus-status--success">{ IconSuccess }</td>
                                    <td className="siu-matrix__campus-status siu-matrix__campus-status--success">{ IconSuccess }</td>
                                    <td className="siu-matrix__campus-status siu-matrix__campus-status--success">{ IconSuccess }</td>
                                    <td className="siu-matrix__campus-status siu-matrix__campus-status--success">{ IconSuccess }</td>
                                    <td className="siu-matrix__campus-status siu-matrix__campus-status--success">{ IconSuccess }</td>
                                    <td className="siu-matrix__campus-status siu-matrix__campus-status--success">{ IconSuccess }</td>
                                    <td className="siu-matrix__campus-status siu-matrix__campus-status--success">{ IconSuccess }</td>
                                    <td className="siu-matrix__campus-status siu-matrix__campus-status--success">{ IconSuccess }</td>
                                    <td className="siu-matrix__campus-status siu-matrix__campus-status--success">{ IconSuccess }</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    }
}